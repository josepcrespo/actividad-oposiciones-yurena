export const state = () => ({
  isWindowNarrow: false
})

export const mutations = {
  setWindowNarrow(state, isNarrow) {
    state.isWindowNarrow = isNarrow
  }
}

export const actions = {
  initializeWindowResize({ commit }, vueInstance) {
    const handleWindowResize = () => {
      const newWidth = window?.innerWidth
      const isNarrow = newWidth < 600
      commit('setWindowNarrow', isNarrow)

      if (isNarrow) {
        vueInstance.$nuxt.setLayout('default-mobile')
      } else {
        vueInstance.$nuxt.setLayout('default')
      }
    }

    // Manejar el evento de redimensionamiento
    window?.addEventListener('resize', handleWindowResize)

    // Inicializar el estado
    handleWindowResize()

    return handleWindowResize
  },
  destroyWindowResize(_, handleWindowResize) {
    window?.removeEventListener('resize', handleWindowResize)
  }
}
