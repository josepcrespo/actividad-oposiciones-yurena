<i18n lang="yaml">
es:
  progressTitle: "Porcentaje de ecuaciones resueltas:"
ca:
  progressTitle: "Percentatge d'equacions resoltes:"
en:
  progressTitle: "Percentage of solved equations:"
de:
  progressTitle: "Prozentsatz gelöster Gleichungen:"
ru:
  progressTitle: "Процент решенных уравнений:"
fr:
  progressTitle: "Pourcentage d'équations résolues:"
it:
  progressTitle: "Percentuale di equazioni risolte:"
eu:
  progressTitle: "Ebaki diren ekuazioen ehunekoa:"
gl:
  progressTitle: "Porcentaxe de ecuacións resoltas:"
</i18n>

<template>
  <v-row class="yrn-math-problems-group-progress">
    <v-col>
      <h3>
        {{ $t('progressTitle') }}
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
