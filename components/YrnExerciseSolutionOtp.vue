<i18n lang="yaml">
  ar:
    required: 'اكتب الحل هنا.'
    invalidSolution: 'الحل غير صحيح.'
    writeStepByStepSolution: 'اكتب حل التمرين خطوة بخطوة لكي يتمكن المعلم من تصحيحه.'
    textAreaLabel: 'اكتب هنا الخطوات للوصول إلى الحل'
    textFieldLabel: 'اكتب هنا الحل النهائي'
  ca:
    required: 'Escriu ací la solució.'
    invalidSolution: 'La solució no és correcta.'
    writeStepByStepSolution: 'Escriu pas a pas la resolució de l’exercici perquè el teu professor el pugui corregir.'
    textAreaLabel: 'Escriu aquí els passos per arribar a la solució'
    textFieldLabel: 'Escriu aquí la solució final'
  de:
    required: 'Schreibe hier die Lösung.'
    invalidSolution: 'Die Lösung ist nicht korrekt.'
    writeStepByStepSolution: 'Schreibe die Lösung des Übungsaufgabe Schritt für Schritt auf, damit dein Lehrer sie korrigieren kann.'
    textAreaLabel: 'Schreibe hier die Schritte zur Lösung'
    textFieldLabel: 'Schreibe hier die endgültige Lösung'
  en:
    required: 'Write the solution here.'
    invalidSolution: 'The solution is not correct.'
    writeStepByStepSolution: 'Write the step-by-step solution of the exercise so that your teacher can correct it.'
    textAreaLabel: 'Write the steps to reach the solution here'
    textFieldLabel: 'Write the final solution here'
  es:
    required: 'Escriba aquí la solución.'
    textAreaLabel: 'Escriba aquí los pasos para llegar a la solución'
    textFieldLabel: 'Escriba aquí la solución final'
    invalidSolution: 'La solución no es correcta.'
    writeStepByStepSolution: 'Escriba paso a paso la resolución del ejercicio para que tu profesor pueda corregirlo.'
  eu:
    required: 'Idatzi hemen irtenbidea.'
    invalidSolution: 'Irtenbidea ez da zuzena.'
    writeStepByStepSolution: 'Idatzi ariketa honen ebazpena pausoz pauso zure irakasleak zuzendu ahal izateko.'
    textAreaLabel: 'Idatzi hemen konponbidera iristeko urratsak'
    textFieldLabel: 'Idatzi hemen azken konponbidea'
  fr:
    required: 'Écrivez la solution ici.'
    invalidSolution: "La solution n'est pas correcte."
    writeStepByStepSolution: 'Écrivez pas à pas la résolution de l’exercice pour que votre professeur puisse le corriger.'
    textAreaLabel: 'Écrivez ici les étapes pour parvenir à la solution'
    textFieldLabel: 'Écrivez ici la solution finale'
  gl:
    required: 'Escribe aquí a solución.'
    invalidSolution: 'A solución non é correcta.'
    writeStepByStepSolution: 'Escribe paso a paso a resolución do exercicio para que o teu profesor poida corrixilo.'
    textAreaLabel: 'Escribe aquí os pasos para chegar á solución'
    textFieldLabel: 'Escribe aquí a solución final'
  it:
    required: 'Scrivi qui la soluzione.'
    invalidSolution: 'La soluzione non è corretta.'
    writeStepByStepSolution: 'Scrivi passo dopo passo la risoluzione dell’esercizio in modo che il tuo insegnante possa correggerlo.'
    textAreaLabel: 'Scrivi qui i passaggi per arrivare alla soluzione'
    textFieldLabel: 'Scrivi qui la soluzione finale'
  ja:
    required: 'ここに解答を書いてください。'
    invalidSolution: '解答が正しくありません。'
    writeStepByStepSolution: '先生が修正できるように、演習のステップバイステップの解決方法を書いてください。'
    textAreaLabel: '解決に至るステップをここに書いてください'
    textFieldLabel: 'ここに最終的な解答を書いてください'
  pt:
    required: 'Escreva a solução aqui.'
    invalidSolution: 'A solução não está correta.'
    writeStepByStepSolution: 'Escreva passo a passo a resolução do exercício para que o seu professor possa corrigi-lo.'
    textAreaLabel: 'Escreva aqui os passos para chegar à solução'
    textFieldLabel: 'Escreva aqui a solução final'
  ro:
    required: 'Scrieți soluția aici.'
    invalidSolution: 'Soluția nu este corectă.'
    writeStepByStepSolution: 'Scrieți pas cu pas soluția exercițiului pentru ca profesorul dvs. să o poată corecta.'
    textAreaLabel: 'Scrieți aici pașii pentru a ajunge la soluție'
    textFieldLabel: 'Scrieți aici soluția finală'
  ru:
    required: 'Напишите решение здесь.'
    invalidSolution: 'Решение неверное.'
    writeStepByStepSolution: 'Напишите пошаговое решение упражнения, чтобы ваш учитель мог его исправить.'
    textAreaLabel: 'Напишите здесь шаги для достижения решения'
    textFieldLabel: 'Напишите здесь окончательное решение'
  zh:
    required: '在此处填写解决方案。'
    invalidSolution: '解决方案不正确。'
    writeStepByStepSolution: '逐步写下练习的解决方案，以便您的老师可以纠正它。'
    textAreaLabel: '在此处填写到达解决方案的步骤'
    textFieldLabel: '在此处填写最终解决方案'
</i18n>

<template>
  <v-row class="yrn-exercise-solution-otp">
    <v-col>
      <h2 class="mt-8 mb-5">
        {{ exerciseSolutionStatement }}
      </h2>
      <v-otp-input
        v-if="otpInput"
        ref="otpInput"
        v-model="solution.final"
        :length="exerciseSolutionExpected.length"
        :disabled="loading"
        :type="type"
        @finish="onFinish"
      />
      <v-form v-else>
        <v-textarea
          v-if="exerciseSolutionFromUserBySteps !== false"
          v-model="solution.bySteps"
          auto-grow
          outlined
          :label="$t('textAreaLabel')"
          :rules="[rules.requiredSolutionBySteps]"
        />
        <v-text-field
          v-model="solution.final"
          :disabled="loading"
          :label="$t('textFieldLabel')"
          :rules="[rules.required, rules.validSolution]"
          outlined
          @input="debouncedOnFinish"
        />
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { debounce } from 'lodash'

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
      solution: {
        bySteps: '',
        final: ''
      },
      simulatedTimeout: 1500,
      type: 'text',
      rules: {
        required: (value) => !!value || this.$t('required'),
        requiredSolutionBySteps: value => !!value || this.$t('writeStepByStepSolution'),
        validSolution: (value) => {
          return value === this.exerciseSolutionExpected || this.$t('invalidSolution')
        }
      },
      debouncedOnFinish: debounce((response) => {
        this.onFinish(response)
      }, 2000)
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
      return this.exercise?.solution?.fromUser
    },
    exerciseSolutionFromUserBySteps() {
      if ('fromUserBySteps' in this.exercise?.solution) {
        return this.exercise?.solution?.fromUserBySteps
      } else {
        return false
      }
    },
    exerciseSolutionMask() {
      return this.exercise?.solution?.expectedMask
    },
    exerciseSolutionWhiteSpacesMask() {
      return this.exercise?.solution?.whiteSpacesMask
    },
    exerciseRouterRedirection() {
      return this.exercise?.routerRedirection ?? null
    },
    exerciseSolutionStatement() {
      return this.exercise?.solution?.statement?.[this.$i18n.locale]
    }
  },
  mounted() {
    if (this.exerciseSolutionWhiteSpacesMask) {
      this.applyMaskForWhiteSpacesOnOtp()
    }
    if (this.exerciseSolutionMask) {
      this.$set(this.solution, 'final', this.exerciseSolutionMask)
    } else if (this.exerciseSolutionExpected.toLowerCase() === this.exerciseSolutionFromUser.toLowerCase()) {
      if (this.exerciseSolutionFromUserBySteps !== false) {
        this.$set(this.solution, 'bySteps', this.exerciseSolutionFromUserBySteps)
      }
      this.$set(this.solution, 'final', this.exerciseSolutionExpected)
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
    onFinish() {
      // response = response || this.solution.final
      this.loading = true
      this.$store?.commit('setPageLoadingOverlay', true)
      if (this.exerciseSolutionFromUserBySteps !== false) {
        this.$store?.commit('learningUnit/setExerciseSolutionFromUserBySteps', {
          activityId: this.activityId,
          challengeId: this.challengeId,
          exerciseId: this.exerciseId,
          solutionBySteps: this.solution.bySteps
        })
      }
      this.$store?.commit('learningUnit/setExerciseSolutionFromUser', {
        activityId: this.activityId,
        challengeId: this.challengeId,
        exerciseId: this.exerciseId,
        solution: this.solution.final
      })
      setTimeout(() => {
        const i18n = this.$i18n
        // Ensure case-insensitive validation, comparing both values in lowercase.
        const success = this.validateSolution(this.solution.final)
        const memojiName = success
          ? 'director-bien'
          : 'director-mal'
        if (!success) { this.$store.commit('increaseErrorsCount') }
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
    applyMaskForWhiteSpacesOnOtp() {
      this.exerciseSolutionWhiteSpacesMask.split('').forEach((char, index) => {
        if (char.toUpperCase() === 'X') {
          this.$refs.otpInput.$refs.input[index].closest('.v-input').style.marginLeft = '48px'
        }
      })
    },
    validateSolution(userSolution) {
      return userSolution.toLowerCase() === this.exerciseSolutionExpected.toLowerCase()
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
