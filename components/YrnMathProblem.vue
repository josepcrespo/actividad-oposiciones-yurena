<template>
  <v-form
    ref="vForm"
    v-model="formState"
  >
    <v-container class="yrn-math-problem blue-grey mb-4">
      <v-row v-if="showIndexAndStatement">
        <v-col class="d-flex">
          <v-btn
            icon
            outlined
          >
            <v-icon>
              {{ index }}
            </v-icon>
          </v-btn>
          <h3 class="ml-4">
            {{ statement }}
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
            v-model="userSolutionBySteps"
            auto-grow
            background-color="grey lighten-1"
            color="black"
            outlined
            label="Escribe aquí los pasos para llegar a la solución"
            :rules="[rules.requiredSolutionBySteps]"
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
            v-model="userSolution"
            :rules="[rules.requiredSolution, rules.solution]"
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
  name: 'YrnMathProblem',
  props: {
    index: {
      required: true,
      type: [Number, String]
    },
    exerciseId: {
      required: true,
      type: String
    },
    showIndexAndStatement: {
      default: true,
      required: false,
      type: Boolean
    },
    solution: {
      required: true,
      type: [Number, String]
    },
    statement: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      formState: false,
      rules: {
        requiredSolution: value => !!value || '¡Resuelve el ejercicio para descifrar la clave secreta!',
        requiredSolutionBySteps: value => !!value || 'Escribe paso a paso la resolución de la ecuación para que tu profesor pueda correjirlo.',
        // eslint-disable-next-line eqeqeq
        solution: value => value == this.solution || 'La solución no es correcta.'
      },
      userSolutionBySteps: '',
      userSolution: ''
    }
  },
  methods: {
    handleTextFieldInput(value) {
      if (this.$refs.vForm.validate()) {
        this.$store.commit('exercises/addOrUpdateSolution', {
          exerciseId: this.exerciseId,
          index: this.index,
          statement : this.statement,
          solution: this.solution,
          solutionBySteps: this.userSolutionBySteps
        })
      }
    },
  }
}
</script>

<style lang="scss">
.yrn-math-problem {
  border: 1px solid grey;
  border-radius: 4px;

  h3 {
    font-family: MartelSans, monospace;
    font-size: 28px;
  }

  .v-btn {
    color: #607D8B !important;
    background-color: white;
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
</style>