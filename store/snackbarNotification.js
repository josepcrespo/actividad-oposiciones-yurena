import { set } from 'vue'

export const state = () => ({
  app: true,
  top: true,
  color: 'default',
  model: false,
  right: true,
  showAction: true,
  text: {
    defaults: {
      es: {
        error: 'Mmm… esto no es lo que esperaba… 😔',
        success: '¡Bien hecho!'
      },
      ca: {
        error: 'Mmm… açò no és el que esperava… 😔',
        success: 'Ben fet!'
      }
    },
    toShow: ''
  },
  timeout: 3500
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
    set(state.text, 'toShow', payload)
  },
  setTimeout(state, payload) {
    state.timeout = payload
  }
}

export const actions = {
  show({ state, commit }, { i18n, success, textToShow }) {
    const color = success ? 'green darken-4' : 'error'
    const textToShowSuccess =state?.text?.defaults?.[i18n.locale]?.success
    const textToShowError = state?.text?.defaults?.[i18n.locale]?.error
    const defaultTextToShow = success ? textToShowSuccess : textToShowError
    textToShow = textToShow ?? defaultTextToShow
    
    commit('setColor', color)
    commit('setTextToShow', textToShow)
    commit('setShowAction', !success)
    commit('setModel', true)
  }
}
