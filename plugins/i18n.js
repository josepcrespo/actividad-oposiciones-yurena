// https://i18n.nuxtjs.org/v7/callbacks#callbacks
export default function ({ app }) {
  // https://i18n.nuxtjs.org/v7/callbacks#onlanguageswitched
  // https://i18n.nuxtjs.org/v7/callbacks#usage
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    const isRtlLanguage = app.i18n?.localeProperties?.dir === 'rtl'
    app.vuetify.framework.rtl = isRtlLanguage ?? false
    app.store.commit('setRtlLanguage', isRtlLanguage)
  }
}