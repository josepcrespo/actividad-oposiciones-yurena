<template>
  <v-app dark>
    <v-app-bar
      :app="vAppBar.app"
      :clipped-left="vAppBar.clippedLeft"
      :clipped-right="vAppBar.clippedRight"
      :elevate-on-scroll="vAppBar.elevateOnScroll"
      :fixed="vAppBar.fixed"
    >
      <yrn-navigation-drawer-left-toggle />
      <yrn-top-menu-title />
      <v-spacer />
      <yrn-theme-toggle />
      <yrn-language-switcher />
      <yrn-navigation-drawer-right-toggle />
    </v-app-bar>
    <v-main :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
      <Nuxt />
    </v-main>
    <yrn-navigation-drawer-left />
    <yrn-navigation-drawer-right />
    <yrn-page-loading-overlay />
    <yrn-snackbar-notification />
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
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
      return this.$store?.state?.learningUnit?.backgroundImage
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
    this.$store.commit('setRtlLanguage', this.isRtlLanguage)
  }
}
</script>

<style lang="scss">
.v-application {
  .v-app-bar {
    // This is important to see the top menu bar using the full viewport width,
    // when using any `<v-navigation-drawer />` positioned on the right side.
    right: 0 !important;
  }

  .v-main {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100%;

    &__wrap {
      backdrop-filter: blur(8px);
    }
  }
}
</style>