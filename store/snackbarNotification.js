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
      ar: {
        error: '😔 ممم… هذا ليس ما تتوقعه…',
        success: 'عمل رائع!'
      },
      ca: {
        error: 'Mmm… açò no és el que esperava… 😔',
        success: 'Ben fet!'
      },
      de: {
        error: 'Mmm... das ist nicht, was ich erwartet habe... 😔',
        success: 'Gut gemacht!'
      },
      en: {
        error: 'Mmm... this is not what I expected... 😔',
        success: 'Well done!'
      },
      es: {
        error: 'Mmm… esto no es lo que esperaba… 😔',
        success: '¡Bien hecho!'
      },
      fr: {
        error: 'Mmm... ce n\'est pas ce à quoi je m\'attendais... 😔',
        success: 'Bien joué !'
      },
      gl: {
        error: 'Mmm... iso non é o que esperaba... 😔',
        success: 'Ben feito!'
      },
      it: {
        error: 'Mmm... questo non è quello che mi aspettavo... 😔',
        success: 'Ben fatto!'
      },
      ja: {
        error: 'うーん... これは予想していたものと違いますね... 😔',
        success: 'よくやった！'
      },
      pt: {
        error: 'Mmm... isto não é o que eu esperava... 😔',
        success: 'Bem feito!'
      },
      ro: {
        error: 'Mmm... asta nu e ce mă așteptam să văd... 😔',
        success: 'Foarte bine!'
      },
      ru: {
        error: 'Ммм... это не то, что я ожидал... 😔',
        success: 'Отлично!'
      },
      zh: {
        error: '嗯... 这不是我预期的... 😔',
        success: '做得好！'
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
