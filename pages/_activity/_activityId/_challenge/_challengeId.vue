<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Actividad: {{ activityId }}</h1>
        <h2>Reto: {{ challengeId }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ChallengePage',
  async asyncData({ params, store }) {
    const { activityId, challengeId } = params
    // This line adds translations for all app static URL slugs.
    await store.dispatch('i18n/setRouteParams', store.state.routeParams)
    return await { activityId, challengeId }
  }
}
</script>
