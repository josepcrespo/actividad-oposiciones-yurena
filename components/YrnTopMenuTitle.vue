<i18n lang="yaml">
  ar:
    activityElement: "نشاط المدير"
    lastChallenge: "التحدي الأخير"
  ca:
    activityElement: "Activitat del director"
    lastChallenge: "Últim repte"
  de:
    activityElement: "Aktivität des Direktors"
    lastChallenge: "Letzte Herausforderung"
  en:
    activityElement: "Director's activity"
    lastChallenge: "Last challenge"
  es:
    activityElement: "Actividad del director"
    lastChallenge: "Reto final"
  eu:
    activityElement: "Zuzendariaren jarduera"
    lastChallenge: "Azken erronka"
  fr:
    activityElement: "Activité du directeur"
    lastChallenge: "Dernier défi"
  gl:
    activityElement: "Actividade do director"
    lastChallenge: "Último reto"
  it:
    activityElement: "Attività del direttore"
    lastChallenge: "Ultima sfida"
  ja:
    activityElement: "ディレクターの活動"
    lastChallenge: "最後の挑戦"
  pt:
    activityElement: "Atividade do diretor"
    lastChallenge: "Último desafio"
  ro:
    activityElement: "Activitatea directorului"
    lastChallenge: "Ultima provocare"
  ru:
    activityElement: "Директорская активность"
    lastChallenge: "Последний вызов"
  zh:
    activityElement: "指导者活动"
    lastChallenge: "最后的挑战"
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
            `${this.$t('activityElement')} / `
          )
          // eslint-disable-next-line eqeqeq
          if (challengeId != 6) {
            subtitle += `${this.challengeTranslation} ${challengeId}`
          } else {
            subtitle += this.$t('lastChallenge')
          }
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
