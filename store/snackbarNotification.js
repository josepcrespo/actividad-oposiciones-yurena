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
        success: 'عمل رائع!',
        batteryDown: 'البطارية نفدت. حاول مرة أخرى.'
      },
      ca: {
        error: 'Mmm… açò no és el que esperava…',
        errorAccessRoute: "Ho sent, no pots accedir a esta ruta.",
        success: 'Ben fet!',
        batteryDown: 'Bateria esgotada. Torna-ho a intentar.'
      },
      de: {
        error: 'Mmm… das ist nicht, was ich erwartet habe…',
        errorAccessRoute: "Entschuldigung, Sie können auf diese Route noch nicht zugreifen.",
        success: 'Gut gemacht!',
        batteryDown: 'Batterie leer. Versuche es erneut.'
      },
      en: {
        error: 'Mmm… this is not what I expected…',
        errorAccessRoute: "Sorry, you can not access this route yet.",
        success: 'Well done!',
        batteryDown: 'Battery depleted. Try again.'
      },
      es: {
        error: 'Mmm… esto no es lo que esperaba…',
        errorAccessRoute: "Lo siento, no puedes acceder a esta ruta aún.",
        success: '¡Bien hecho!',
        batteryDown: 'Batería agotada. Inténtalo de nuevo.'
      },
      eu: {
        error: 'Mmm… ez da espero duena…',
        errorAccessRoute: "Barkatu, ezin duzu oraindik sartu bide honetara.",
        success: 'Ondo egina!',
        batteryDown: 'Bateria agortuta. Saiatu berriro.'
      },
      fr: {
        error: 'Mmm… ce n\'est pas ce à quoi je m\'attendais…',
        errorAccessRoute: "Désolé, vous ne pouvez pas accéder à cette route pour l'instant.",
        success: 'Bien joué!',
        batteryDown: 'Batterie épuisée. Réessayez.'
      },
      gl: {
        error: 'Mmm… iso non é o que esperaba…',
        errorAccessRoute: "Desculpe, ainda não pode aceder a esta rota.",
        success: 'Ben feito!',
        batteryDown: 'Batería esgotada. Téntao de novo.'
      },
      it: {
        error: 'Mmm… questo non è quello che mi aspettavo…',
        errorAccessRoute: "Spiacente, non puoi accedere a questa rotta ancora.",
        success: 'Ben fatto!',
        batteryDown: 'Batteria esaurita. Riprova.'
      },
      ja: {
        error: 'うーん… これは予想していたものと違いますね…',
        errorAccessRoute: "申し訳ありませんが、まだこのルートにアクセスできません。",
        success: 'よくやった！',
        batteryDown: 'バッテリーが切れました。もう一度試してください。'
      },
      pt: {
        error: 'Mmm… isto não é o que eu esperava…',
        errorAccessRoute: "Desculpe, ainda não é possível acessar esta rota.",
        success: 'Bem feito!',
        batteryDown: 'Bateria esgotada. Tente novamente.'
      },
      ro: {
        error: 'Mmm… asta nu e ce mă așteptam să văd…',
        errorAccessRoute: "Scuze, nu poți accesa această rută încă.",
        success: 'Foarte bine!',
        batteryDown: 'Baterie descărcată. Încearcă din nou.'
      },
      ru: {
        error: 'Ммм… это не то, что я ожидал…',
        errorAccessRoute: "Извините, вы пока не можете получить доступ к этому маршруту.",
        success: 'Отлично!',
        batteryDown: 'Батарея разряжена. Попробуйте еще раз.'
      },
      zh: {
        error: '嗯… 这不是我预期的…',
        errorAccessRoute: "抱歉，您暂时无法访问此路由。",
        success: '做得好！',
        batteryDown: '电池耗尽。请重试。'
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
