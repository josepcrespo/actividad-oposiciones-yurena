<template>
  <v-row class="yrn-exercise-solution-otp">
    <v-col>
      <h2 class="mt-8">
        {{ statement }}
      </h2>
      <v-otp-input
        v-model="model"
        :length="expected.length"
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
    },
    expected: {
      required: true,
      type: String
    },
    mask: {
      default: '',
      required: false,
      type: String
    },
    routerRedirection: {
      default: () => ({
        activityId: undefined,
        challengeId: undefined
      }),
      required: false,
      type: Object
    },
    statement: {
      required: true,
      type: String
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
  mounted() {
    this.model = this.mask
  },
  methods: {
    onFinish(response) {
      this.loading = true
      this.$store.commit('setPageLoadingOverlay', true)
      // TODO: hacer una mutación dinámica de setUserResult en learningUnit Store.
      // this.$store.commit('actividad-1-reto-1/setUserResult', response)
      this.$store.commit('setExerciseSolutionFromUser', {
        activityId: this.activityId,
        challengeId: this.challengeId,
        exerciseId: this.exerciseId,
        solution: this.model
      })
      setTimeout(() => {
        const i18n = this.$i18n
        const success = response === this.expected
        this.loading = false
        this.$store.commit('setPageLoadingOverlay', false)
        this.$store.dispatch('snackbarNotification/show', { i18n, success })
        
        if (
          success &&
          this.routerRedirection.activityId &&
          this.routerRedirection.challengeId
        ) {
          setTimeout(() => {
            this.$router.push(
              this.$store?.getters?.getLocaleActivityChallengeUrl(
                this.$i18n,
                this.activityId,
                this.challengeId
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
