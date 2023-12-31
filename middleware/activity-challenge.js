// /activity/2/challenge/2
export default function ({ app, from, redirect, route, store }) {
  const { activityId, challengeId } = route.params
  const prevActivityId =
    parseInt(activityId) ? parseInt(activityId) - 1 : -1
  const prevChallengeId =
    parseInt(challengeId) ? parseInt(challengeId) - 1 : -1
  let isChallengeSolved = false
  let prevActivity
  // Get previous Challenge from same Activity
  let prevChallenge =
    store.getters['learningUnit/getChallenge'](activityId, prevChallengeId)
  
  if (prevChallenge) {
    isChallengeSolved =
      store.getters['learningUnit/isChallengeSolved'](activityId, prevChallengeId)
  } else {
    // Get previous Activity
    prevActivity =
      store.getters['learningUnit/getActivity'](prevActivityId)
    if (prevActivity) {
      const lastChallengeIdFromPrevActivity =
        window?.Array?.isArray(prevActivity.challenges)
          ? prevActivity.challenges.length
          : 1
      
      // Get last Challenge from the previous Activity
      prevChallenge = store.getters['learningUnit/getChallenge'](
        prevActivityId, lastChallengeIdFromPrevActivity)
      isChallengeSolved = store.getters['learningUnit/isChallengeSolved'](
        prevActivityId, prevChallenge.challengeId)
    }
  }
  
  if (!isChallengeSolved) {
    let localizedRedirectionPath = ''

    if (prevChallengeId === 0 && prevActivityId === 0) {
      // Current path is the first Challenge from first Activity

      const validIndexPagePassword = store
        .getters['learningUnit/hasValidIndexPagePassword']
      
      if (!validIndexPagePassword) {
        // https://i18n.nuxtjs.org/v7/api#localepath
        // Por alguna extraña razón, los métodos de la biblioteca i18n
        // se encuentran disponibles en `app` y no en `app.i18n`.
        localizedRedirectionPath = app?.localePath('/', app?.i18n?.locale)
      }
    } else if (prevActivity && prevChallenge) {
      // Redirect to the last Challenge from previous Activity

      // https://i18n.nuxtjs.org/v7/api#localepath
      // Por alguna extraña razón, algunos métodos de la biblioteca i18n
      // se encuentran disponibles en `app` y no en `app.i18n`.
      const redirectionPath = `/activity/${prevActivity.activityId}/challenge/${prevChallenge.challengeId}`
      localizedRedirectionPath =
        app?.localePath(redirectionPath, app?.i18n?.localeProperties?.code)
    } else if (prevChallenge) {
      // Redirect to the previous Challenge from the same Activity

      // https://i18n.nuxtjs.org/v7/api#localepath
      // Por alguna extraña razón, los métodos de la biblioteca i18n
      // se encuentran disponibles en `app` y no en `app.i18n`.
      const redirectionPath = `/activity/${activityId}/challenge/${prevChallengeId}`
      localizedRedirectionPath =
        app?.localePath(redirectionPath, app?.i18n?.localeProperties?.code)
    }

    if (localizedRedirectionPath) {
      store?.dispatch('snackbarNotification/show', {
        i18n: app.i18n,
        success: false,
        defaultTextKey: 'errorAccessRoute'
      })
      
      return redirect(localizedRedirectionPath)
    }
  }
}
