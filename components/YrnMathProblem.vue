<template>
  <v-container class="yrn-math-problem blue-grey mb-4">
    <v-row v-if="exerciseIndex && statement">
      <v-col class="d-flex">
        <v-btn
          icon
          outlined
        >
          <v-icon>
            {{ exerciseIndex }}
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
          auto-grow
          background-color="grey lighten-1"
          color="black"
          outlined
          name="userSolutionBySteps"
          label="Escribe aquí los pasos para llegar a la solución"
          :value="userSolutionBySteps"
          :rules="[rules.requiredSolutionBySteps]"
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
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'YrnMathProblem',
  props: {
    exerciseIndex: {
      default: '',
      required: false,
      type: [Number, String]
    },
    solution: {
      required: true,
      type: [Number, String]
    },
    statement: {
      default: '',
      required: false,
      type: String
    }
  },
  data() {
    return {
      rules: {
        requiredSolution: value => !!value || '¡Resuelve el ejercicio para descifrar la clave secreta!',
        requiredSolutionBySteps: value => !!value || 'Escribe paso a paso la resolución de la ecuación para que tu profesor pueda correjirlo.',
        // eslint-disable-next-line eqeqeq
        solution: value => value == this.solution || 'La solución no es correcta.'
      },
      userSolutionBySteps: '',
      userSolution: ''
    }
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