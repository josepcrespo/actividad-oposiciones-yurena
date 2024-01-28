<template>
  <v-row class="yrn-exercise">
    <v-col>
      <h2 class="mt-8 mb-4">
        {{ exerciseStatement }}
      </h2>
      <yrn-exercise-sections-group-progress
        class="mb-2"
        :current="exerciseSectionsWellSolved.length"
        :total="exerciseSections.length"
      />
      <yrn-exercise-sections-group
        :activity-id="activityId"
        :challenge-id="challengeId"
        :exercise="exercise"
        :shuffled="shuffled"
      />
      <yrn-exercise-sections-group-progress
        class="mt-2"
        :current="exerciseSectionsWellSolved.length"
        :total="exerciseSections.length"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnExercise',
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
    },
    shuffled: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  computed: {
    exercise() {
      return this.getExercise(this.activityId, this.challengeId, this.exerciseId)
    },
    exerciseSections() {
      return this.exercise?.sections ?? []
    },
    exerciseSectionsWellSolved() {
      return this.getExerciseSectionsWellSolved(
        this.activityId,
        this.challengeId,
        this.exerciseId
      )
    },
    exerciseStatement() {
      return this.exercise?.statement?.[this.$i18n.locale]
    }
  },
  methods: {
    getExercise(activityId, challengeId, exerciseId) {
      return this.$store?.getters['learningUnit/getExercise'](
        activityId,
        challengeId,
        exerciseId
      )
    },
    getExerciseSections() {
      return this.exercise?.sections ?? []
    },
    getExerciseSectionsWellSolved(activityId, challengeId, exerciseId) {
      return this.$store?.getters['learningUnit/getExerciseSectionsWellSolved'](
        activityId,
        challengeId,
        exerciseId
      )
    }
  }
}
</script>
