<template>
  <v-row class="yrn-exercise-solution-fill-text-gaps">
    <v-col>
      <h2 class="mt-8 mb-4">
        {{ exerciseSolutionStatement }}
      </h2>
      <p
        class="font-weight-medium"
        v-html="autoFillTextGaps"
      />
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
    autoFillTextGaps() {
      return this.fillTextGaps(this.exerciseSolutionTextToFillGaps)
    },
    exercise() {
      return this.getExercise(this.activityId, this.challengeId, this.exerciseId)
    },
    exerciseSections() {
      return this.exercise?.sections ?? []
    },
    exerciseSolutionExpected() {
      return this.exercise?.solution?.expected
    },
    // TODO: utilizar para hacer una redirección opcional.
    exerciseRouterRedirection() {
      return this.exercise?.routerRedirection ?? null
    },
    exerciseSolutionStatement() {
      return this.exercise?.solution?.statement?.[this.$i18n.locale]
    },
    exerciseSolutionTextToFillGaps() {
      return this.exercise?.solution?.textToFillGaps?.[this.$i18n.locale]
    },
    /**
     * Currently not used. Maybe useful in the future.
     */
    solutionsFromUser() {
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
      return this.$store.getters['learningUnit/getExerciseSection'](
        this.activityId,
        this.challengeId,
        this.exerciseId,
        sectionId
      )
    },
    fillTextGaps(textWithGaps) {
      let filledText = textWithGaps

      this.exerciseSections.forEach(section => {
        const sectionId = section.sectionId
        const expectedSolution =
          this.getExerciseSection(sectionId)?.solution?.expected
        const userSolution =
          this.getExerciseSection(sectionId)?.solution?.fromUser
        // eslint-disable-next-line eqeqeq
        const validUserSolution = userSolution == expectedSolution
        const backgroundColor = validUserSolution
          ? 'green'
          : 'deep-orange darken-4'
        const size = String(expectedSolution).length
        
        const placeholderSolution =
          `<input
            autocomplete="off"
            class="yrn-exercise-solution-fill-text-gaps__input-placeholder ${backgroundColor}"
            name="placeholder-${sectionId}"
            placeholder="${sectionId}"
            readonly
            size="${size}"
            type="text"
            value="${validUserSolution ? userSolution : ''}"
          >`

        // Replace placeholders with spaces, like this: ${{ placeholder }}
        const regExp = new RegExp(`\\$\\{\\{\\s*${sectionId}\\s*\\}\\}`, 'g')
        filledText = filledText.replace(regExp, placeholderSolution)
        
        // Replace placeholders WITHOUT spaces, like this: ${{sectionId}}
        const regExpWithoutSpaces = new RegExp(`\\$\\{\\{${sectionId}\\}\\}`, 'g')
        filledText = filledText.replace(regExpWithoutSpaces, placeholderSolution)
      })

      return filledText
    }
  }
}
</script>

<style lang="scss">
.yrn-exercise-solution-fill-text-gaps {
  &__input-placeholder {
    padding-left: 5px;
    padding-top: 4px;
    border-radius: 8px;
    height: 20px;
    font-family: MartelSans, monospace;
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--dark {
  .yrn-exercise-solution-fill-text-gaps {
    &__input-placeholder {
      color: white !important;
    }
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light {
  .yrn-exercise-solution-fill-text-gaps {
    &__input-placeholder {
      color: black;
    }
  }
}
</style>
