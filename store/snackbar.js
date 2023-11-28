export const state = () => ({
  app: true,
  top: true,
  color: 'default',
  model: false,
  right: true,
  showAction: true,
  text: {
    error: '¡Código incorrecto!',
    success: '¡Código correcto! Cargando la siguiente actividad…',
    toShow: ''
  },
  timeout: 3000
})

export const mutations = {
  setColor(state, value) {
    state.color = value
  },
  setModel(state, value) {
    state.model = value
  },
  setShowAction(state, value) {
    state.showAction = value
  },
  setTextToShow(state, value) {
    state.text.toShow = value
  },
  setTimeout(state, value) {
    state.timeout = value
  },
}