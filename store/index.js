// https://v2.nuxt.com/docs/directory-structure/store/#vuex-strict-mode
export const strict = false

export const state = () => ({
  rightDrawer: false
})

export const mutations = {
  setRightDrawer(state, payload) {
    state.rightDrawer = payload
  }
}