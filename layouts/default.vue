<template>
  <v-app dark>
    <yrn-app-bar>
      <template #rightAlignedContent>
        <v-spacer />
        <yrn-language-switcher />
        <yrn-theme-toggle />
        <yrn-achievements-toggle />
        <yrn-navigation-drawer-right-toggle />
      </template>
    </yrn-app-bar>
    <v-main :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
      <Nuxt />
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    <yrn-navigation-drawer-left />
    <yrn-navigation-drawer-right />
    <yrn-page-loading-overlay />
    <yrn-snackbar-notification />
    <yrn-achievements-dialog />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      vAppBar: {
        app: true,
        clippedLeft: true,
        elevateOnScroll: true,
        fixed: true
      }
    }
  },
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
