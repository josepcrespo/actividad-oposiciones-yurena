<i18n lang="yaml">
es:
  buttonTitle: "Aspecto"
  buttonTooltip: "Alterna entre colores claros y oscuros"
ca:
  buttonTitle: "Aspecte"
  buttonTooltip: "Alterna entre colors clars i foscos"
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
        <span class="ml-2 d-none d-sm-block">
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
