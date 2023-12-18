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
  setColor(state, payload) {
    state.color = payload
  },
  setModel(state, payload) {
    state.model = payload
  },
  setShowAction(state, payload) {
    state.showAction = payload
  },
  setTextToShow(state, payload) {
    state.text.toShow = payload
  },
  setTimeout(state, payload) {
    state.timeout = payload
  },
}