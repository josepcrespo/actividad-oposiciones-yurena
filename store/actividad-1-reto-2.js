export const state = () => ({
  userResult: '',
  validResult: 'asdf'
})

export const mutations = {
  setUserResult(state, userResult) {
    state.userResult = userResult
  }
}