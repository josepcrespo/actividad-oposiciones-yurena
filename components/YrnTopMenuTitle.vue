<template>
  <div class="yrn-top-menu-title d-flex">
    <v-toolbar-title
      class="yrn-top-menu-title__title pl-1 d-none d-lg-block"
      :title="title"
    >
      {{ title }}
    </v-toolbar-title>
    <div
      class="yrn-top-menu-title__subtitle ml-1 ml-md-4 text-h6 font-weight-light text-capitalize"
      :title="subtitle"
    >
      {{ subtitle }}
    </div>
</div>  
</template>

<script>
export default {
  name: 'YrnTopMenuTitle',
  computed: {
    activityTranslation() {
      return this?.$store?.state?.routeParams?.[this.$i18n.locale]?.activity
    },
    challengeTranslation() {
      return this?.$store?.state?.routeParams?.[this.$i18n.locale]?.challenge
    },
    title() {
      return this.$store?.state?.learningUnit?.indexPage?.title?.[this.$i18n.locale]
    },
    subtitle() {
      let subtitle = ''
      if (
        this.$route.params.activityId &&
        this.$route.params.challengeId
      ) {
        subtitle = this.capitalizeWords(
          `${this.activityTranslation} ${this.$route.params.activityId} / ` +
          `${this.challengeTranslation} ${this.$route.params.challengeId}`
        )
      } else {
        subtitle = this.$store?.state?.learningUnit?.indexPage?.subtitle?.[this.$i18n.locale]
      }

      return subtitle
    }
  },
  methods: {
    capitalizeWords(string) {
      return string.replace(/\b\w/g, function (match) {
        return match.toUpperCase()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-top-menu-title {
  /**
   * Por la razón que sea, estas reglas deben estar también en el contenedor.
   */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  /**
   * El componente `<v-toolbar-title /> ya aplica las declaraciones (`overflow`,
   * `text-overflow` y, `white-space`) apropiadas.
   */

  &__subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>