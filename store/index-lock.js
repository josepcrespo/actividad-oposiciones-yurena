export const state = () => ({
  userKey: '',
  validKey: '141592'
})

export const mutations = {
  setUserKey(state, userKey) {
    state.userKey = userKey
  }
}