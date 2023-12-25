// https://v2.nuxt.com/docs/directory-structure/store/#vuex-strict-mode
export const strict = false

export const state = () => ({
  navigationDrawerLeft: true,
  navigationDrawerRight: false,
  pageLoadingOverlay: false,
  routeParams: {
    es: {
      activity: 'actividad',
      challenge: 'reto'
    },
    ca: {
      activity: 'activitat',
      challenge: 'repte'
    },
    de: {
      activity: 'aktivität',
      challenge: 'herausforderung'
    },
    en: {
      activity: 'activity',
      challenge: 'challenge'
    },
    fr: {
      activity: 'activité',
      challenge: 'défi'
    },
    it: {
      activity: 'attività',
      challenge: 'sfida'
    },
    ru: {
      activity: 'деятельность',
      challenge: 'вызов'
    },
    eu: {
      activity: 'ekintza',
      challenge: 'erronka'
    },
    gl: {
      activity: 'actividade',
      challenge: 'reto'
    }
  }
})

export const mutations = {
  setPageLoadingOverlay(state, payload) {
    state.pageLoadingOverlay = payload
  },
  setNavigationDrawerLeft(state, payload) {
    state.navigationDrawerLeft = payload
  },
  setNavigationDrawerRight(state, payload) {
    state.navigationDrawerRight = payload
  }
}

export const getters = {
  // TODO: ver si se puede refactorizar con i18n.useLocalePath() o i18n.useLocaleRoute()
  getLocaleUrl: (state) => (i18n, url) => {
    if (!url.startsWith('/')) {
      url = `/${url}`
    }
    if (i18n && i18n.locale !== i18n.defaultLocale) {
      url = `/${i18n.locale}${url}`
    }

    return url
  },
  getLocaleActivityChallengeUrl: (state, getters) => (i18n, activityId, challengeId) => {
    // TODO: ver si se puede refactorizar con i18n.useLocalePath() o i18n.useLocaleRoute()
    // https://i18n.nuxtjs.org/getting-started/basic-usage/#url-path
    // https://i18n.nuxtjs.org/getting-started/basic-usage/#url-path-with-route-object
    const activitySlugTranslation = state
      ?.routeParams?.[i18n.locale]?.activity
    const challengeSlugTranslation = state
      ?.routeParams?.[i18n.locale]?.challenge
    const translatedUrl =
      `/${activitySlugTranslation}/${activityId}/` +
      `${challengeSlugTranslation}/${challengeId}`

    return getters?.getLocaleUrl(i18n, translatedUrl)
  }
}
