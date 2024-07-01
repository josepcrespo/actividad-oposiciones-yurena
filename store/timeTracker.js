export const state = () => ({
  timeEntries: [],
  totalTime: 0
})

export const mutations = {
  addTimeEntry(state, entry) {
    state.timeEntries.push(entry)
  },
  updateTotalTime(state, timeSpent) {
    state.totalTime = timeSpent
  },
  clearTimeEntries(state) {
    state.timeEntries = []
    state.totalTime = 0
  }
}

export const getters = {
  getTimeEntries: (state) => {
    return state.timeEntries
  },
  getTotalTime: (state) => {
    return state.totalTime
  },
  getLocalTotalTime: (state, getters) => (locale) => {
    const i18nLanguageToLocaleMapping = {
      'ar': 'ar-SA',
      'ca': 'es-ES',
      'de': 'de-DE',
      'en': 'en-GB',
      'es': 'es-ES',
      'eu': 'es-ES',
      'fr': 'fr-FR',
      'gl': 'pt-PT',
      'it': 'it-IT',
      'ja': 'ja-JP',
      'pt': 'pt-PT',
      'ro': 'ro-RO',
      'ru': 'ru-RU',
      'zh': 'zh-CN'
    }
    const i18nLanguage = i18nLanguageToLocaleMapping[locale]
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }
    const formattedTime = new Date(state.totalTime).toLocaleString(i18nLanguage, options)

    return formattedTime
  }
}
