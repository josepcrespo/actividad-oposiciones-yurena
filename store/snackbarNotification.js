import { set } from 'vue'

export const state = () => ({
  app: true,
  top: true,
  color: 'default',
  model: false,
  memojiName: '',
  right: true,
  rounded: undefined,
  text: {
    defaults: {
      ar: {
        error: 'ممم… هذا ليس ما تتوقعه…',
        errorAccessRoute: "عذرًا ، لا يمكنك الوصول إلى هذا المسار بعد.",
        success: 'عمل رائع!'
      },
      ca: {
        error: 'Mmm… açò no és el que esperava…',
        errorAccessRoute: "Ho sent, no pots accedir a esta ruta.",
        success: 'Ben fet!'
      },
      de: {
        error: 'Mmm… das ist nicht, was ich erwartet habe…',
        errorAccessRoute: "Entschuldigung, Sie können auf diese Route noch nicht zugreifen.",
        success: 'Gut gemacht!'
      },
      en: {
        error: 'Mmm… this is not what I expected…',
        errorAccessRoute: "Sorry, you can not access this route yet.",
        success: 'Well done!'
      },
      es: {
        error: 'Mmm… esto no es lo que esperaba…',
        errorAccessRoute: "Lo siento, no puedes acceder a esta ruta aún.",
        success: '¡Bien hecho!'
      },
      eu: {
        error: 'Mmm… ez da espero duena…',
        errorAccessRoute: "Barkatu, ezin duzu oraindik sartu bide honetara.",
        success: 'Ondo egina!'
      },
      fr: {
        error: 'Mmm… ce n\'est pas ce à quoi je m\'attendais…',
        errorAccessRoute: "Désolé, vous ne pouvez pas accéder à cette route pour l'instant.",
        success: 'Bien joué!'
      },
      gl: {
        error: 'Mmm… iso non é o que esperaba…',
        errorAccessRoute: "Desculpe, ainda não pode aceder a esta rota.",
        success: 'Ben feito!'
      },
      it: {
        error: 'Mmm… questo non è quello che mi aspettavo…',
        errorAccessRoute: "Spiacente, non puoi accedere a questa rotta ancora.",
        success: 'Ben fatto!'
      },
      ja: {
        error: 'うーん… これは予想していたものと違いますね…',
        errorAccessRoute: "申し訳ありませんが、まだこのルートにアクセスできません。",
        success: 'よくやった！'
      },
      pt: {
        error: 'Mmm… isto não é o que eu esperava…',
        errorAccessRoute: "Desculpe, ainda não é possível acessar esta rota.",
        success: 'Bem feito!'
      },
      ro: {
        error: 'Mmm… asta nu e ce mă așteptam să văd…',
        errorAccessRoute: "Scuze, nu poți accesa această rută încă.",
        success: 'Foarte bine!'
      },
      ru: {
        error: 'Ммм… это не то, что я ожидал…',
        errorAccessRoute: "Извините, вы пока не можете получить доступ к этому маршруту.",
        success: 'Отлично!'
      },
      zh: {
        error: '嗯… 这不是我预期的…',
        errorAccessRoute: "抱歉，您暂时无法访问此路由。",
        success: '做得好！'
      }
    },
    toShow: ''
  },
  timeout: 5000
})

export const mutations = {
  setColor(state, payload) {
    state.color = payload
  },
  setModel(state, payload) {
    state.model = payload
  },
  setMemojiName(state, payload) {
    state.memojiName = payload ?? ''
  },
  setTextToShow(state, payload) {
    set(state.text, 'toShow', payload)
  },
  setTimeout(state, payload) {
    state.timeout = payload
  }
}

export const actions = {
  show({ state, commit }, { i18n, defaultTextKey, memojiName, success, textToShow }) {
    const color = success ? 'green darken-4' : 'error'
    const defaultTextToShowSuccess = state?.text?.defaults?.[i18n.locale]?.success
    const defaultTextToShowError = state?.text?.defaults?.[i18n.locale]?.error
    let defaultTextToShow = success ? defaultTextToShowSuccess : defaultTextToShowError
    defaultTextToShow = state?.text?.defaults?.[i18n.locale]?.[defaultTextKey] ?? defaultTextToShow
    textToShow = textToShow ?? defaultTextToShow
    
    commit('setColor', color)
    commit('setMemojiName', memojiName)
    commit('setTextToShow', textToShow)
    commit('setModel', true)
  }
}
