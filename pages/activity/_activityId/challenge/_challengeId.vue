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
  async asyncData({ params }) {
    const { activityId, challengeId } = params
    return await { activityId, challengeId }
  }
}
</script>
