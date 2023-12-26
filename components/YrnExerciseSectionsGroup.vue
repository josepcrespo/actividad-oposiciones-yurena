<template>
  <v-expansion-panels class="yrn-exercise-sections-group">
    <v-expansion-panel
      v-for="(section, index) in exercise.sections"
      :key="index"
    >
      <v-expansion-panel-header>
        <div class="yrn-exercise-sections-group__expansion-panel-header d-flex align-center justify-space-between">
          <div>
            <v-icon class="mr-4">
              {{ section.sectionId }})
            </v-icon>
            {{ getSectionStatement(section) }}
          </div>
          <v-chip
            v-show="isWellSolved(section)"
            class="ma-2"
            color="green"
            label
            text-color="white"
          >
            x = {{ section.solution.expected }}
          </v-chip>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <yrn-exercise-section
          :activity-id="activityId"
          :challenge-id="challengeId"
          :exercise-id="exercise.exerciseId"
          :section="section"
          :show-section-and-statement="false"
        />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'YrnExerciseSectionsGroup',
  props: {
    activityId: {
      required: true,
      type: [Number, String]
    },
    challengeId: {
      required: true,
      type: [Number, String]
    },
    exercise: {
      required: true,
      type: Object
    }
  },
  computed: {
    isWellSolved() {
      return (section) => {
        return this.getSolutionVerdict(section)
      }
    }
  },
  methods: {
    getSectionStatement(section) {
      return section?.statement?.[this.$i18n.locale]
    },
    getSolutionVerdict(section) {
      // eslint-disable-next-line eqeqeq
      return section.solution.expected == section.solution.fromUser
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-exercise-sections-group {
  &__expansion-panel-header {
    font-family: MartelSans, monospace;
    font-size: 22px;
    
    i {
      font-family: MartelSans, monospace;
      font-size: 30px;
    }
  }
}
</style>
