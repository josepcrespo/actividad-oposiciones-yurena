<template>
  <v-form
    ref="vForm"
    v-model="form.state"
    class="yrn-exercise-section"
  >
    <v-container class="blue-grey mb-4">
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
            {{ section.statement }}
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
            label="Escribe aquí los pasos para llegar a la solución"
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
            label="Escribe aquí la solución (valor de x)"
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
          requiredSolution: value => !!value || '¡Resuelve el ejercicio para descifrar la clave secreta!',
          requiredSolutionBySteps: value => !!value || 'Escribe paso a paso la resolución de la ecuación para que tu profesor pueda correjirlo.',
          // eslint-disable-next-line eqeqeq
          validSolution: value => value == this.section.solution.expected || 'La solución no es correcta.'
        }
      },
      solution: {
        user: '',
        bySteps: ''
      }
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

      this.$store.commit('learningUnit/addOrUpdateSection', {
        activityId: this.activityId,
        challengeId:  this.challengeId,
        exerciseId: this.exerciseId,
        section: updatedSection
      })
    },
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