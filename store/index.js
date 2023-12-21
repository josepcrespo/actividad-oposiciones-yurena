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
