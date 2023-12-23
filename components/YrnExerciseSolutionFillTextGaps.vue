<template>
  <v-row class="yrn-exercise-solution-fill-text-gaps">
    <v-col>
      <h2 class="mt-8">
        {{ exerciseSolutionStatement }}
      </h2>
      <p v-html="autoFillText"></p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnExerciseSolutionFillGaps',
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
  computed: {
    autoFillText() {
      return this.fillTextGaps(
        this.exerciseSolutionTextToFillGaps,
        this.getSolutionsFromUser()
      )
    },
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
      return this.exercise?.routerRedirection ?? {}
    },
    exerciseSolutionStatement() {
      return this.exercise?.solution?.statement?.[this.$i18n.locale]
    },
    exerciseSolutionTextToFillGaps() {
      return this.exercise?.solution?.textToFillGaps?.[this.$i18n.locale]
    }
  },
  mounted() {
    // this.model = this.exerciseSolutionMask
  },
  methods: {
    getExercise(activityId, challengeId, exerciseId) {
      return this.$store.getters['learningUnit/getExercise'](
        activityId,
        challengeId,
        exerciseId
      )
    },
    getExerciseSection(sectionId) {
      return this.$store.getters['learningUnit/getExerciseSection']({
        activityId: this.activityId,
        challengeId: this.challengeId,
        exerciseId: this.exerciseId,
        sectionId
      })
    },
    getSolutionsFromUser() {
      const solutionsFromUser = []
      this.exerciseSolutionExpected.forEach(obj => {
        const propertyName = Object.keys(obj)[0]
        const propertyValue =
          this.getExerciseSection(propertyName)?.solution?.fromUser
        const userSolution = { [propertyName]: propertyValue }
        solutionsFromUser.push(userSolution)
      })

      return solutionsFromUser
    },
    fillTextGaps(textWithGaps, solutions) {
      let filledText = textWithGaps

      solutions.forEach(solution => {
        const placeholder = Object.keys(solution)[0]
        const placeholderSolution =
          `<input type="text" disabled placeholder="${solution[placeholder]}">
            ${solution[placeholder]}
          </input>`

        // Replace placeholders with spaces, like this: ${{ placeholder }}
        const regExp = new RegExp(`\\$\\{\\{\\s*${placeholder}\\s*\\}\\}`, 'g')
        filledText = filledText.replace(regExp, placeholderSolution)
        
        // Replace placeholders WITHOUT spaces, like this: ${{placeholder}}
        const regExpWithoutSpaces = new RegExp(`\\$\\{\\{${placeholder}\\}\\}`, 'g')
        filledText = filledText.replace(regExpWithoutSpaces, placeholderSolution)
      })

      return filledText
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-exercise-solution-fill-text-gaps {
  // Custom style
}
</style>
