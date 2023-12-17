<template>
  <v-row class="yrn-math-problems-group-progress">
    <v-col>
      <h3>
        Porcentaje de ecuaciones resueltas:
      </h3>
      <v-progress-linear
        v-model="progress"
        height="25"
      >
        <strong>{{ progress }}%</strong>
      </v-progress-linear>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnExerciseSectionsGroupProgress',
  props: {
    current: {
      required: true,
      type: Number
    },
    total: {
      required: true,
      type: Number
    },
    withDecimals: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      model: false
    }
  },
  computed: {
    progress() {
      const percentProgress = (this.current / this.total) * 100
      if (this.withDecimals) {
        return percentProgress.toFixed(2)
      } else {
        return window.Math.ceil(percentProgress)
      }
    }
  }
}
</script>

<style lang="scss">
.yrn-math-problems-group-progress {
  // Custom Styles
}
</style>
