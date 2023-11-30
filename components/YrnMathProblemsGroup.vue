<template>
  <v-expansion-panels class="yrn-math-problems-group">
    <v-expansion-panel
      v-for="(mathProblem, index) in mathProblems"
      :key="index"
    >
      <v-expansion-panel-header>
        <div class="yrn-math-problems-group__expansion-panel-header d-flex align-center">
          <v-icon class="mr-4">
            {{ mathProblem.index }})
          </v-icon>
          {{ mathProblem.statement }}
          <v-chip
            v-if="getExerciseSolution(mathProblem)"
            class="ma-2"
            color="green"
            label
            text-color="white"
          >
            x = {{ getExerciseSolution(mathProblem) }}
          </v-chip>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <yrn-math-problem
          :index="mathProblem.index"
          :solution="mathProblem.solution"
          :statement="mathProblem.statement"
          :show-index-and-statement="false"
          :exercise-id="exerciseId"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'YrnMathProblemsGroup',
  props: {
    mathProblems: {
      required: true,
      type: Array
    },
    exerciseId: {
      required: true,
      type: String
    }
  },
  mounted() {
    console.info(this.$store.state.exercises.solutions)
    console.info(this.getExerciseSolution({exerciseId: '1.1', index: 'b'}))
  },
  methods: {
    getExerciseSolution(exercise) {
      return this.$store.state.exercises.solutions.find(solution => {
        return solution.exerciseId === exercise.exerciseId &&
          solution.index === exercise.index
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-math-problems-group {
  &__expansion-panel-header {
    font-family: MartelSans, monospace;
    font-size: 20px;
    
    i {
      font-family: MartelSans, monospace;
    }
  }
}
</style>
