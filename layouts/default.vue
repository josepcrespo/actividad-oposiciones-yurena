<template>
  <v-app dark>
    <yrn-navigation-drawer-left />
    <v-app-bar
      :clipped-left="vAppBar.clippedLeft"
      :fixed="vAppBar.fixed"
      app
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
        clippedLeft: true,
        fixed: true
      }
    }
  },
  computed: {
    backgroundImageUrl() {
      return this.$store?.state?.learningUnit?.backgroundImage
    }
  }
}
</script>

<style lang="scss">
.v-main {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100%;

  &__wrap {
    backdrop-filter: blur(8px);
  }
}
</style>