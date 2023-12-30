<template>
  <v-container>
    <v-row>
      <v-col>
        <component
          :is="item.type"
          v-for="(item, index) in pageStructure"
          :key="index"
          v-bind="item"
          :activity-id="activityId"
          :challenge-id="challengeId"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChallengePage',
  middleware: 'activity-challenge',
  async asyncData({ params, store }) {
    const { activityId, challengeId } = params
    // This line adds translations for all app static URL slugs.
    await store.dispatch('i18n/setRouteParams', store.state.routeParams)
    return await { activityId, challengeId }
  },
  head() {
    return {
      titleTemplate: this.titleTemplate
    }
  },
  computed: {
    activityTranslation() {
      const translation =
        this?.$store?.state?.routeParams?.[this.$i18n.locale]?.activity
      
      return translation.charAt(0).toUpperCase() + translation.slice(1)
    },
    challengeTranslation() {
      return this?.$store?.state?.routeParams?.[this.$i18n.locale]?.challenge
    },
    pageStructure() {
      return this.$store
        ?.getters['learningUnit/getChallenge'](this.activityId, this.challengeId)
        ?.pageStructure ?? []
    },
    titleTemplate() {
      return `%s - ${this.activityTranslation} ${this.activityId}, ` +
        `${ this.challengeTranslation } ${ this.challengeId }`
    }
  }
}
</script>
