<template>
  <v-app dark>
    <yrn-app-bar />
    <v-main :style="{ backgroundImage: `url(${$config.baseURL}${backgroundImageUrl})` }">
      <Nuxt />
    </v-main>
    <yrn-bottom-navigation />
    <yrn-language-switcher-dialog />
    <yrn-navigation-drawer-left />
    <yrn-navigation-drawer-right />
    <yrn-page-loading-overlay />
    <yrn-snackbar-notification />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultMobileLayout',
  head() {
    return {
      title: this.titleTranslation
    }
  },
  computed: {
    backgroundImageUrl() {
      return `${this.$config.baseURL}${this.$store?.state?.learningUnit?.backgroundImage}`
    },
    isRtlLanguage() {
      return this.$i18n?.localeProperties?.dir === 'rtl'
    },
    titleTranslation() {
      return this?.$store?.state?.learningUnit?.indexPage?.title?.[this.$i18n.locale]
    }
  },
  created() {
    this.$vuetify.rtl = this.isRtlLanguage
    this.$store?.commit('setRtlLanguage', this.isRtlLanguage)
  }
}
</script>
