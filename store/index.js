// https://v2.nuxt.com/docs/directory-structure/store/#vuex-strict-mode
export const strict = false

export const state = () => ({
  routeParams: {
    es: {
      activity: 'actividad',
      challenge: 'reto'
    },
    ca: {
      activity: 'activitat',
      challenge: 'repte'
    }
  },
  navigationDrawerLeft: true,
  navigationDrawerRight: false
})

export const mutations = {
  setNavigationDrawerLeft(state, payload) {
    state.navigationDrawerLeft = payload
  },
  setNavigationDrawerRight(state, payload) {
    state.navigationDrawerRight = payload
  }
}