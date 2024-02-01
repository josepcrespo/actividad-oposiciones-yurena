<template>
  <v-row class="yrn-exercise-solution-otp">
    <v-col>
      <h2 class="mt-8">
        {{ exerciseSolutionStatement }}
      </h2>
      <v-otp-input
        v-model="model"
        :length="exerciseSolutionExpected.length"
        :disabled="loading"
        :type="type"
        @finish="onFinish"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnExerciseSolutionOtp',
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
  data() {
    return {
      loading: false,
      model: '',
      simulatedTimeout: 1500,
      type: 'text'
    }
  },
  computed: {
    exercise() {
      return this.getExercise(this.activityId, this.challengeId, this.exerciseId)
    },
    exerciseSolutionExpected() {
      return this.exercise?.solution?.expected
    },
    exerciseSolutionMask() {
      return this.exercise?.solution?.expectedMask
    },
    exerciseRouterRedirection() {
      return this.exercise?.routerRedirection ?? null
    },
    exerciseSolutionStatement() {
      return this.exercise?.solution?.statement?.[this.$i18n.locale]
    }
  },
  mounted() {
    this.model = this.exerciseSolutionMask
  },
  methods: {
    getExercise(activityId, challengeId, exerciseId) {
      return this.$store?.getters['learningUnit/getExercise'](
        activityId,
        challengeId,
        exerciseId
      )
    },
    onFinish(response) {
      this.loading = true
      this.$store?.commit('setPageLoadingOverlay', true)
      this.$store?.commit('learningUnit/setExerciseSolutionFromUser', {
        activityId: this.activityId,
        challengeId: this.challengeId,
        exerciseId: this.exerciseId,
        solution: this.model
      })
      setTimeout(() => {
        const i18n = this.$i18n
        const success = response === this.exerciseSolutionExpected
        const memojiName = success
          ? 'director-bien'
          : 'director-mal'
        this.loading = false
        this.$store?.commit('setPageLoadingOverlay', false)
        this.$store?.dispatch('snackbarNotification/show', {
          i18n,
          memojiName,
          success
        })
        
        if (
          success &&
          this.exerciseRouterRedirection?.activityId &&
          this.exerciseRouterRedirection?.challengeId
        ) {
          setTimeout(() => {
            this.$router.push(
              this.$store?.getters?.getLocaleActivityChallengeUrl(
                this.$i18n,
                this.exerciseRouterRedirection?.activityId,
                this.exerciseRouterRedirection?.challengeId
              )
            )
          }, this.simulatedTimeout)
        }
      }, this.simulatedTimeout)
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-exercise-solution-otp {
  .v-otp-input {
    input {
      font-family: monospace;
    }
  }
}
</style>
