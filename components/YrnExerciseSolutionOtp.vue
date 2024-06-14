<i18n lang="yaml">
  ar:
    required: 'اكتب الحل هنا.'
    invalidSolution: 'الحل غير صحيح.'
  ca:
    required: 'Escriu aquí la solució.'
    invalidSolution: 'La solució no és correcta.'
  de:
    required: 'Schreibe hier die Lösung.'
    invalidSolution: 'Die Lösung ist nicht korrekt.'
  en:
    required: 'Write the solution here.'
    invalidSolution: 'The solution is not correct.'
  es:
    required: 'Escribe aquí la solución.'
    invalidSolution: 'La solución no es correcta.'
  eu:
    required: 'Idatzi hemen irtenbidea.'
    invalidSolution: 'Irtenbidea ez da zuzena.'
  fr:
    required: 'Écrivez la solution ici.'
    invalidSolution: "La solution n'est pas correcte."
  gl:
    required: 'Escribe aquí a solución.'
    invalidSolution: 'A solución non é correcta.'
  it:
    required: 'Scrivi qui la soluzione.'
    invalidSolution: 'La soluzione non è corretta.'
  ja:
    required: 'ここに解答を書いてください。'
    invalidSolution: '解答が正しくありません。'
  pt:
    required: 'Escreva a solução aqui.'
    invalidSolution: 'A solução não está correta.'
  ro:
    required: 'Scrieți soluția aici.'
    invalidSolution: 'Soluția nu este corectă.'
  ru:
    required: 'Напишите решение здесь.'
    invalidSolution: 'Решение неверное.'
  zh:
    required: '在此处填写解决方案。'
    invalidSolution: '解决方案不正确。'
</i18n>

<template>
  <v-row class="yrn-exercise-solution-otp">
    <v-col>
      <h2 class="mt-8">
        {{ exerciseSolutionStatement }}
      </h2>
      <v-otp-input
        v-if="otpInput"
        v-model="model"
        :length="exerciseSolutionExpected.length"
        :disabled="loading"
        :type="type"
        @finish="onFinish"
      />
      <v-form v-else>
        <v-text-field
        v-model="model"
        :disabled="loading"
        :rules="[rules.required, rules.validSolution]"
        outlined
        @change="onFinish(model)"
        />
      </v-form>
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
    otpInput: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      loading: false,
      model: '',
      simulatedTimeout: 1500,
      type: 'text',
      rules: {
        required: (value) => !!value || this.$t('required'),
        validSolution: value => {
          return value === this.exerciseSolutionExpected || this.$t('invalidSolution')
        }
      }
    }
  },
  computed: {
    exercise() {
      return this.getExercise(this.activityId, this.challengeId, this.exerciseId)
    },
    exerciseSolutionExpected() {
      return this.exercise?.solution?.expected
    },
    exerciseSolutionFromUser() {
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
    if (this.exerciseSolutionMask) {
      this.model = this.exerciseSolutionMask
    } else if (this.exerciseSolutionExpected === this.exerciseSolutionFromUser) {
      this.model = this.exerciseSolutionExpected
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
    onFinish(response) {
      response = response || this.model
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
        // Ensure case-insensitive validation, comparing both values in lowercase.
        const success = this.validateSolution(response)
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
    },
    validateSolution(userSolution) {
      if(this.otpInput) {
        return userSolution.toLowerCase() === this.exerciseSolutionExpected.toLowerCase()
      } else {
        return userSolution === this.exerciseSolutionExpected
      }
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
