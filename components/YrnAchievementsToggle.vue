<i18n lang="yaml">
  ar:
    buttonTitle: "الإنجازات"
    buttonTooltip: "عرض الإنجازات المحققة"
  ca:
    buttonTitle: "Premis"
    buttonTooltip: "Mostra els assoliments aconseguits"
  de:
    buttonTitle: "Errungenschaften"
    buttonTooltip: "Zeige erreichte Erfolge"
  en:
    buttonTitle: "Achievements"
    buttonTooltip: "Show achieved achievements"
  es:
    buttonTitle: "Logros"
    buttonTooltip: "Muestra los logros conseguidos"
  eu:
    buttonTitle: "Arrakasta"
    buttonTooltip: "Lortutako arrakasta erakutsi"
  fr:
    buttonTitle: "Réalisations"
    buttonTooltip: "Afficher les réalisations obtenues"
  gl:
    buttonTitle: "Logros"
    buttonTooltip: "Amosar os logros acadados"
  it:
    buttonTitle: "Risultati"
    buttonTooltip: "Mostra i risultati ottenuti"
  ja:
    buttonTitle: "実績"
    buttonTooltip: "達成した実績を表示"
  pt:
    buttonTitle: "Conquistas"
    buttonTooltip: "Mostrar conquistas alcançadas"
  ro:
    buttonTitle: "Realizări"
    buttonTooltip: "Afișează realizările obținute"
  ru:
    buttonTitle: "Достижения"
    buttonTooltip: "Показать достигнутые достижения"
  zh:
    buttonTitle: "成就"
    buttonTooltip: "显示已实现的成就"
</i18n>

<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-btn
        class="yrn-achievements-toggle px-2 mr-1 mr-sm-2"
        :icon="$vuetify.breakpoint.smAndDown"
        text
        v-bind="attrs"
        v-on="on"
        @click="dialogModel = !dialogModel"
      >
        <v-icon>
          mdi-star-face
        </v-icon>
        <span class="mx-1 d-none d-md-block">
          {{ $t('buttonTitle') }}
        </span>
      </v-btn>
    </template>
    <span>{{ $t('buttonTooltip') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'YrnAchievementsToggle',
  computed: {
    dialogModel: {
      get() {
        return this.$store?.state?.achievementsDialog
      },
      set(value) {
        this.$store?.commit('setAchievementsDialog', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-achievements-toggle {
  &.v-btn {
    padding: 0 8px;
  }
}
</style>
