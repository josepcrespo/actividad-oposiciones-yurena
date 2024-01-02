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
    </v-app-bar>
    <v-main :style="{ backgroundImage: `url(${backgroundImageUrl})` }">
      <Nuxt />
    </v-main>
    <v-bottom-navigation
      v-model="vBottomNavigation.value"
      :app="vBottomNavigation.app"
      :grow="vBottomNavigation.grow"
      @change="onVBottomNavigationChange"
    >
      <v-btn value="language">
        <span>Idioma</span>
        <v-icon>mdi-translate</v-icon>
      </v-btn>
      <v-btn value="theme">
        <span>Apariencia</span>
        <v-icon v-if="$vuetify.theme.dark">
          mdi-lightbulb-off-outline
        </v-icon>
        <v-icon v-else>
          mdi-lightbulb-on-outline
        </v-icon>
      </v-btn>
      <v-btn value="achievements">
        <span>Logros</span>
        <v-icon>mdi-star-face</v-icon>
      </v-btn>
      <v-btn value="progress">
        <span>Progreso</span>
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <yrn-navigation-drawer-left />
    <yrn-navigation-drawer-right />
    <yrn-page-loading-overlay />
    <yrn-snackbar-notification />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultMobileLayout',
  data() {
    return {
      vAppBar: {
        app: true,
        clippedLeft: true,
        elevateOnScroll: true,
        fixed: true
      },
      vBottomNavigation: {
        app: true,
        grow: true,
        value: undefined
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
    this.$store?.commit('setRtlLanguage', this.isRtlLanguage)
  },
  methods: {
    onVBottomNavigationChange() {
      console.info(this.vBottomNavigation.value)
    }
  }
}
</script>