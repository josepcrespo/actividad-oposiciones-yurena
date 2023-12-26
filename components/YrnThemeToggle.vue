<i18n lang="yaml">
es:
  buttonTitle: "Aspecto"
  buttonTooltip: "Alterna entre colores claros y oscuros"
ca:
  buttonTitle: "Aspecte"
  buttonTooltip: "Alterna entre colors clars i foscos"
en:
  buttonTitle: "Appearance"
  buttonTooltip: "Toggle between light and dark colors"
de:
  buttonTitle: "Erscheinungsbild"
  buttonTooltip: "Umschalten zwischen hellen und dunklen Farben"
ru:
  buttonTitle: "Внешний вид"
  buttonTooltip: "Переключение между светлыми и темными цветами"
fr:
  buttonTitle: "Apparence"
  buttonTooltip: "Basculer entre des couleurs claires et sombres"
it:
  buttonTitle: "Aspetto"
  buttonTooltip: "Passa tra colori chiari e scuri"
eu:
  buttonTitle: "Itxura"
  buttonTooltip: "Aldatu argi eta ilun koloreen artean"
gl:
  buttonTitle: "Aparencia"
  buttonTooltip: "Alternar entre cores claras e escuras"
pt:
  buttonTitle: "Aparência"
  buttonTooltip: "Alternar entre cores claras e escuras"
ar:
  buttonTitle: "المظهر"
  buttonTooltip: "التبديل بين الألوان الفاتحة والداكنة"
zh:
  buttonTitle: "外观"
  buttonTooltip: "在浅色和深色之间切换"
ro:
  buttonTitle: "Aspect"
  buttonTooltip: "Comută între culori deschise și închise"
ja:
  buttonTitle: "外観"
  buttonTooltip: "明るい色と暗い色の切り替え"
</i18n>

<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn
        class="mr-1"
        :icon="$vuetify.breakpoint.xs"
        text
        v-bind="attrs"
        v-on="on"
        @click.stop="toggleTheme()"
      >
        <v-icon v-if="!$vuetify.theme.dark">
          mdi-lightbulb-on-outline
        </v-icon>
        <v-icon v-if="$vuetify.theme.dark">
          mdi-lightbulb-off-outline
        </v-icon>
        <span class="ml-2 d-none d-md-block">
          {{ $t('buttonTitle') }}
        </span>
      </v-btn>
    </template>
    <span>{{ $t('buttonTooltip') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'YrnThemeToggle',
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>
