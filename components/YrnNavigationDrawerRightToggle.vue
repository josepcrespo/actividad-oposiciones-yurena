<i18n lang="yaml">
es:
  buttonTitle: "Progreso"
  buttonTooltip: "Muestra el progreso en la Situación de Aprendizaje"
ca:
  buttonTitle: "Progrés"
  buttonTooltip: "Mostra el progrés en la situació d'aprenentatge"
en:
  buttonTitle: "Progress"
  buttonTooltip: "Show progress in the learning situation"
de:
  buttonTitle: "Fortschritt"
  buttonTooltip: "Fortschritt in der Lernsituation anzeigen"
ru:
  buttonTitle: "Прогресс"
  buttonTooltip: "Показать прогресс в учебной ситуации"
fr:
  buttonTitle: "Progrès"
  buttonTooltip: "Afficher les progrès dans la situation d'apprentissage"
it:
  buttonTitle: "Progresso"
  buttonTooltip: "Mostra il progresso nella situazione di apprendimento"
eu:
  buttonTitle: "Egiten"
  buttonTooltip: "Erakutsi ikaskuntza-situan egindako aurrerapena"
gl:
  buttonTitle: "Progreso"
  buttonTooltip: "Amosar o progreso na situación de aprendizaxe"
pt:
  buttonTitle: "Progresso"
  buttonTooltip: "Mostrar o progresso na situação de aprendizagem"
ar:
  buttonTitle: "التقدم"
  buttonTooltip: "عرض التقدم في الحالة التعلمية"
zh:
  buttonTitle: "进展"
  buttonTooltip: "显示“学习情况”的进展"
ro:
  buttonTitle: "Progres"
  buttonTooltip: "Arată progresul în situația de învățare"
ja:
  buttonTitle: "プログレソ"
  buttonTooltip: "「学習状況」の進捗状況を表示します。"
</i18n>

<template>
  <v-tooltip
    class="yrn-navigation-drawer-right-toggle"
    bottom
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="ml-1"
        :icon="$vuetify.breakpoint.xs"
        text
        v-bind="attrs"
        v-on="on"
        @click.stop="toggleNavigationDrawerRight()"
      >
        <v-icon>
          mdi-format-list-bulleted
        </v-icon>
        <span class="mx-2 d-none d-md-block">
          {{ $t('buttonTitle') }}
        </span>
      </v-btn>
    </template>
    <span>{{ $t('buttonTooltip') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'YrnNavigationDrawerRightToggle',
  methods: {
    toggleNavigationDrawerRight() {
      this.$store.commit(
        'setNavigationDrawerRight',
        !this.$store?.state?.navigationDrawerRight
      )
    }
  }
}
</script>