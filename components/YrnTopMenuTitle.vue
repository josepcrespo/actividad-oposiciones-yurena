<i18n lang="yaml">
  ar:
    activityElement: "نشاط المدير"
  ca:
    activityElement: "Activitat del director"
  de:
    activityElement: "Aktivität des Direktors"
  en:
    activityElement: "Director's activity"
  es:
    activityElement: "Actividad del director"
  eu:
    activityElement: "Zuzendariaren jarduera"
  fr:
    activityElement: "Activité du directeur"
  gl:
    activityElement: "Actividade do director"
  it:
    activityElement: "Attività del direttore"
  ja:
    activityElement: "ディレクターの活動"
  pt:
    activityElement: "Atividade do diretor"
  ro:
    activityElement: "Activitatea directorului"
  ru:
    activityElement: "Директорская активность"
  zh:
    activityElement: "指导者活动"
</i18n>

<template>
  <div class="yrn-top-menu-title d-flex">
    <v-toolbar-title
      class="yrn-top-menu-title__title pl-1 d-none d-lg-block"
      :title="title"
    >
      {{ title }}
    </v-toolbar-title>
    <div
      class="yrn-top-menu-title__subtitle ml-1 ml-md-4 text-h6 font-weight-light text-capitalize"
      :title="subtitle"
    >
      {{ subtitle }}
    </div>
</div>
</template>

<script>
export default {
  name: 'YrnTopMenuTitle',
  computed: {
    activityTranslation() {
      return this?.$store?.state?.routeParams?.[this.$i18n.locale]?.activity ?? ''
    },
    challengeTranslation() {
      return this?.$store?.state?.routeParams?.[this.$i18n.locale]?.challenge ?? ''
    },
    title() {
      return this.$store?.state?.learningUnit?.indexPage?.title?.[this.$i18n.locale] ?? ''
    },
    subtitle() {
      const { activityId, challengeId } = this.$route.params
      let subtitle

      if (activityId && challengeId) {
          subtitle = this.$capitalizeWords(
          // `${this.activityTranslation} ${activityId} / ` +
          // The project owner required to set a static value for the activity.
          `${this.$t('activityElement')} / ` +
          `${this.challengeTranslation} ${challengeId}`
        )
      } else {
        subtitle = this.$store?.state?.learningUnit?.indexPage?.subtitle?.[this.$i18n.locale]
          ?? ''
      }

      return subtitle
    }
  }
}
</script>

<style lang="scss" scoped>
// Add ellipsis when text overflow.
%ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.yrn-top-menu-title {
  /**
   * Por la razón que sea, estas reglas deben estar también en el contenedor.
   */
  @extend %ellipsis;

  /**
   * El componente `<v-toolbar-title /> ya aplica las declaraciones (`overflow`,
   * `text-overflow` y, `white-space`) apropiadas.
   */
  &__subtitle {
    @extend %ellipsis;
  }
}
</style>
