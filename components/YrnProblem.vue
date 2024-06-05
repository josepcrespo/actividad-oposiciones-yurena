<template>
  <v-row class="yrn-problem">
    <v-col>
      <h2 class="mt-8 mb-4">
        {{ problemTitle }}
      </h2>
      <blockquote class="blockquote">
        <p
          class="text-body-1"
          v-html="problemStatement"
        />
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnProblem',
  props: {
    activityId: {
      required: true,
      type: [Number, String]
    },
    challengeId: {
      required: true,
      type: [Number, String]
    },
    exerciseId: {
      required: true,
      type: [Number, String]
    }
  },
  computed: {
    exercise() {
      return this.getExercise(this.activityId, this.challengeId, this.exerciseId)
    },
    problemTitle() {
      return this.exercise?.title?.[this.$i18n.locale] ?? ''
    },
    problemStatement() {
      return this.exercise?.statement?.[this.$i18n.locale] ?? ''
    }
  },
  methods: {
    getExercise(activityId, challengeId, exerciseId) {
      return this.$store?.getters['learningUnit/getExercise'](
        activityId,
        challengeId,
        exerciseId
      )
    }
  }
}
</script>
