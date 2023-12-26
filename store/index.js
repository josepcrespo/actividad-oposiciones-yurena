// https://v2.nuxt.com/docs/directory-structure/store/#vuex-strict-mode
export const strict = false

export const state = () => ({
  navigationDrawerLeft: true,
  navigationDrawerRight: false,
  pageLoadingOverlay: false,
  routeParams: {
    ar: {
      challenge: 'تحدي',
      activity: 'نشاط',
      language: 'لغة'
    },
    // ca: {
    //   activity: 'activitat',
    //   challenge: 'repte',
    //   language: 'idioma'
    // },
    de: {
      activity: 'aktivität',
      challenge: 'herausforderung',
      language: 'sprache'
    },
    en: {
      activity: 'activity',
      challenge: 'challenge',
      language: 'language'
    },
    es: {
      activity: 'actividad',
      challenge: 'reto',
      language: 'idioma'
    },
    // eu: {
    //   activity: 'ekintza',
    //   challenge: 'erronka',
    //   language: 'hizkuntza'
    // },
    fr: {
      activity: 'activité',
      challenge: 'défi',
      language: 'langue'
    },
    // gl: {
    //   activity: 'actividade',
    //   challenge: 'reto',
    //   language: 'lingua'
    // },
    it: {
      activity: 'attività',
      challenge: 'sfida',
      language: 'lingua'
    },
    // ja: {
    //   activity: 'アクティビティ',
    //   challenge: 'チャレンジ',
    //   language: '言語'
    // },
    // pt: {
    //   activity: 'atividade',
    //   challenge: 'desafio',
    //   language: 'língua'
    // },
    // ro: {
    //   activity: 'activitate',
    //   challenge: 'provocare',
    //   language: 'limbă'
    // },
    ru: {
      activity: 'деятельность',
      challenge: 'вызов',
      language: 'язык'
    },
    zh: {
      activity: '活动',
      challenge: '挑战',
      language: '语言'
    },
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
