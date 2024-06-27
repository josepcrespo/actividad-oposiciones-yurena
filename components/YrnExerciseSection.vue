<i18n lang="yaml">
  ar:
    requiredSolution: 'اكتب الحل النهائي للتمرين!'
    requiredSolutionBySteps: 'اكتب حل التمرين خطوة بخطوة لكي يتمكن المعلم من تصحيحه لاحقاً.'
    textAreaLabel: 'اكتب هنا الخطوات للوصول إلى الحل'
    textFieldLabel: 'اكتب هنا الحل (قيمة x)'
    invalidSolution: 'الحل غير صحيح.'
  ca:
    requiredSolution: 'Escriu la solució final de l’exercici!'
    requiredSolutionBySteps: 'Escriu pas a pas la resolució de l’exercici perquè el teu professor el pugui corregir posteriorment.'
    textAreaLabel: 'Escriu aquí els passos per arribar a la solució'
    textFieldLabel: 'Escriu aquí la solució (valor de x)'
    invalidSolution: 'La solució no és correcta.'
  de:
    requiredSolution: 'Schreibe die endgültige Lösung der Aufgabe!'
    requiredSolutionBySteps: 'Schreibe die Lösung der Aufgabe Schritt für Schritt auf, damit dein Lehrer sie später korrigieren kann.'
    textAreaLabel: 'Schreibe hier die Schritte zur Lösung'
    textFieldLabel: 'Schreibe hier die Lösung (Wert von x)'
    invalidSolution: 'Die Lösung ist nicht korrekt.'
  en:
    requiredSolution: 'Write the final solution to the exercise!'
    requiredSolutionBySteps: 'Write the step-by-step solution of the exercise so that your teacher can correct it later.'
    textAreaLabel: 'Write the steps to reach the solution here'
    textFieldLabel: 'Write the solution here (value of x)'
    invalidSolution: 'The solution is not correct.'
  es:
    requiredSolution: '¡Escriba la solución final del ejercicio!'
    requiredSolutionBySteps: 'Escriba paso a paso la resolución del ejercicio para que tu profesor pueda corregirlo posteriormente.'
    textAreaLabel: 'Escriba aquí los pasos para llegar a la solución'
    textFieldLabel: 'Escriba aquí la solución (valor de x)'
    invalidSolution: 'La solución no es correcta.'
  eu:
    requiredSolution: 'Idatzi ariketaren azken konponbidea!'
    requiredSolutionBySteps: 'Idatzi ariketa honen ebazpena pausoz pauso zure irakasleak beranduago zuzendu ahal izateko.'
    textAreaLabel: 'Idatzi hemen konponbidera iristeko urratsak'
    textFieldLabel: 'Idatzi hemen konponbidea (x-ren balioa)'
    invalidSolution: 'Irtenbidea ez da zuzena.'
  fr:
    requiredSolution: 'Écrivez la solution finale de l’exercice!'
    requiredSolutionBySteps: 'Écrivez pas à pas la résolution de l’exercice pour que votre professeur puisse le corriger ultérieurement.'
    textAreaLabel: 'Écrivez ici les étapes pour parvenir à la solution'
    textFieldLabel: 'Écrivez ici la solution (valeur de x)'
    invalidSolution: "La solution n'est pas correcte."
  gl:
    requiredSolution: 'Escribe a solución final do exercicio!'
    requiredSolutionBySteps: 'Escribe paso a paso a resolución do exercicio para que o teu profesor poida corrixilo posteriormente.'
    textAreaLabel: 'Escribe aquí os pasos para chegar á solución'
    textFieldLabel: 'Escribe aquí a solución (valor de x)'
    invalidSolution: 'A solución non é correcta.'
  it:
    requiredSolution: 'Scrivi la soluzione finale dell’esercizio!'
    requiredSolutionBySteps: 'Scrivi passo dopo passo la risoluzione dell’esercizio in modo che il tuo insegnante possa correggerlo successivamente.'
    textAreaLabel: 'Scrivi qui i passaggi per arrivare alla soluzione'
    textFieldLabel: 'Scrivi qui la soluzione (valore di x)'
    invalidSolution: 'La soluzione non è corretta.'
  ja:
    requiredSolution: '演習の最終的な解決方法を書いてください！'
    requiredSolutionBySteps: '先生が後で修正できるように、演習のステップバイステップの解決方法を書いてください。'
    textAreaLabel: '解決に至るステップをここに書いてください'
    textFieldLabel: '解答をここに書いてください（x の値）'
    invalidSolution: '解答が正しくありません。'
  pt:
    requiredSolution: 'Escreva a solução final do exercício!'
    requiredSolutionBySteps: 'Escreva passo a passo a resolução do exercício para que o seu professor possa corrigi-lo posteriormente.'
    textAreaLabel: 'Escreva aqui os passos para chegar à solução'
    textFieldLabel: 'Escreva aqui a solução (valor de x)'
    invalidSolution: 'A solução não está correta.'
  ro:
    requiredSolution: 'Scrieți soluția finală a exercițiului!'
    requiredSolutionBySteps: 'Scrieți pas cu pas soluția exercițiului pentru ca profesorul dvs. să o poată corecta ulterior.'
    textAreaLabel: 'Scrieți aici pașii pentru a ajunge la soluție'
    textFieldLabel: 'Scrieți aici soluția (valoarea lui x)'
    invalidSolution: 'Soluția nu este corectă.'
  ru:
    requiredSolution: 'Напишите окончательное решение упражнения!'
    requiredSolutionBySteps: 'Напишите пошаговое решение упражнения, чтобы ваш учитель мог его исправить позже.'
    textAreaLabel: 'Напишите здесь шаги для достижения решения'
    textFieldLabel: 'Напишите здесь решение (значение x)'
    invalidSolution: 'Решение неверное.'
  zh:
    requiredSolution: '填写练习的最终解决方案！'
    requiredSolutionBySteps: '逐步写下练习的解决方案，以便您的老师可以稍后纠正它。'
    textAreaLabel: '在此处填写到达解决方案的步骤'
    textFieldLabel: '在此处填写解决方案（x 的值）'
    invalidSolution: '解决方案不正确。'
</i18n>

<template>
  <v-form
    ref="vForm"
    v-model="form.state"
    class="yrn-exercise-section"
  >
    <v-container class="blue lighten-5 mb-4">
      <v-row v-if="showSectionAndStatement">
        <v-col class="d-flex align-center">
          <v-btn
            icon
            outlined
          >
            <v-icon>
              {{ section.sectionId }}
            </v-icon>
          </v-btn>
          <h3 class="ml-4">
            {{ sectionStatement }}
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          xl="8"
          lg="8"
          md="8"
          sm="8"
          xs="12"
        >
          <v-textarea
            v-model="solution.bySteps"
            auto-grow
            background-color="grey lighten-1"
            color="black"
            outlined
            :label="$t('textAreaLabel')"
            :rules="[form.rules.requiredSolutionBySteps]"
            @input="handleTextFieldInput"
          />
        </v-col>
        <v-col
          cols="12"
          xl="4"
          lg="4"
          md="4"
          sm="4"
          xs="12"
        >
          <v-text-field
            v-model="solution.user"
            :rules="[form.rules.requiredSolution, form.rules.validSolution]"
            background-color="grey lighten-1"
            color="black !important"
            :label="$t('textFieldLabel')"
            outlined
            @input="handleTextFieldInput"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'YrnExerciseSection',
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
    section: {
      required: true,
      type: Object
    },
    showSectionAndStatement: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      form: {
        state: false,
        rules: {
          requiredSolution: value => !!value || this.$t('requiredSolution'),
          requiredSolutionBySteps: value => !!value || this.$t('requiredSolutionBySteps'),
          // eslint-disable-next-line eqeqeq
          validSolution: value => value == this.section.solution.expected || this.$t('invalidSolution')
        }
      },
      solution: {
        user: '',
        bySteps: ''
      }
    }
  },
  computed: {
    sectionStatement() {
      return this.section?.statement?.[this.$i18n.locale]
        ?? this.section?.statement
    }
  },
  mounted() {
    const solutionFromUser = this.section.solution?.fromUser?.trim().replace(/\s+/g, ' ')
    // eslint-disable-next-line eqeqeq
    if (solutionFromUser == this.section.solution?.expected) {
      this.$set(this.solution, 'user', this.section.solution.fromUser)
      this.$set(this.solution, 'bySteps', this.section.solution.fromUserBySteps)
    }
  },
  methods: {
    handleTextFieldInput(value) {
      // Si quisiéramos guardar solo cuando el resultado es válido:
      // if (this.$refs.vForm.validate()) {
      const updatedSection = {
        ...this.section,
        solution: {
          expected: this.section.solution.expected,
          fromUser: this.solution.user,
          fromUserBySteps: this.solution.bySteps
        }
      }

      this.$store?.commit('learningUnit/setSection', {
        activityId: this.activityId,
        challengeId:  this.challengeId,
        exerciseId: this.exerciseId,
        section: updatedSection
      })
    }
  }
}
</script>

<style lang="scss">
.yrn-exercise-section {
  .container {
    border: 1px solid grey;
    border-radius: 4px;

    .v-btn {
      color: #607D8B !important;
      background-color: white;

      i {
        font-size: 30px;
      }
    }

    h3 {
      font-family: MartelSans, monospace;
      font-size: 22px;
    }

    .v-input {
      &__slot {
        background: url('/img/pattern-notebook-squared.png') repeat !important;
      }
    }

    textarea,
    input,
    label {
      color: black !important;
      font-family: PatrickHand, monospace;
    }
  }
}
</style>
