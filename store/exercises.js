export const state = () => ({
  solutions: []
})

export const mutations = {
  addOrUpdateSolution(state, value) {
    const arrayIndex = state.solutions.findIndex(solution => {
      return solution.exerciseId === value.exerciseId &&
        solution.index === value.index
    })

    if (arrayIndex !== -1) {
      state.solutions.splice(arrayIndex, 1, value)
    } else {
      state.solutions.push(value)
    }
  }
}

export const getters = {
  getSolution(state, value) {
    return state.solutions.find(solution => {
      return solution.exerciseId === value.exerciseId &&
        solution.index === value.index
    })
  }
}
