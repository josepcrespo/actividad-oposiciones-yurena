<template>
  <div class="yrn-top-menu-title d-flex">
    <v-toolbar-title class="pl-1">
      {{ title }}
    </v-toolbar-title>
    <div class="ml-4 text-h6 font-weight-light text-capitalize d-none d-md-block">
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
        subtitle = `${this.activityTranslation} ${this.$route.params.activityId} / ` +
          `${ this.challengeTranslation } ${this.$route.params.challengeId}`
      } else {
        subtitle = this.$store?.state?.learningUnit?.indexPage?.subtitle?.[this.$i18n.locale]
      }

      return subtitle
    }
  }
}
</script>

<style scoped>
.yrn-top-menu-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>