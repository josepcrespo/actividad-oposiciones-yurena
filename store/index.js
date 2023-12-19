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