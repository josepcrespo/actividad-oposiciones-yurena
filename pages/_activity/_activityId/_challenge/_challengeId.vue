<i18n lang="yaml">
  ar:
    continueBtn: 'متابعة'
    printChallengeBtn: 'طباعة التحدي'
  ca:
    continueBtn: 'Continuar'
    printChallengeBtn: 'Imprimir repte'
  de:
    continueBtn: 'Fortsetzen'
    printChallengeBtn: 'Herausforderung drucken'
  en:
    continueBtn: 'Continue'
    printChallengeBtn: 'Print Challenge'
  es:
    continueBtn: 'Continuar'
    printChallengeBtn: 'Imprimir reto'
  eu:
    continueBtn: 'Jarraitu'
    printChallengeBtn: 'Erronka inprimatu'
  fr:
    continueBtn: 'Continuer'
    printChallengeBtn: 'Imprimer le défi'
  gl:
    continueBtn: 'Continuar'
    printChallengeBtn: 'Imprimir reto'
  it:
    continueBtn: 'Continua'
    printChallengeBtn: 'Stampare la sfida'
  ja:
    continueBtn: '続行'
    printChallengeBtn: 'チャレンジを印刷する'
  pt:
    continueBtn: 'Continuar'
    printChallengeBtn: 'Imprimir desafio'
  ro:
    continueBtn: 'Continuați'
    printChallengeBtn: 'Imprimați provocarea'
  ru:
    continueBtn: 'Продолжить'
    printChallengeBtn: 'Печать вызова'
  zh:
    continueBtn: '继续'
    printChallengeBtn: '打印挑战'
</i18n>

<template>
  <v-container>
    <component
      :is="item.type"
      v-for="(item, index) in pageStructure"
      :key="index"
      v-bind="item"
      :activity-id="activityId"
      :challenge-id="challengeId"
    />
    <v-btn
      v-if="continuePath !== $route.path"
      class="my-10"
      :class="{ 'float-right': $i18n.locale !== 'ar' ? true : false }"
      color="primary"
      :disabled="!isChallengeWellDone"
      :to="continuePath"
    >
      {{ $t('continueBtn') }}
    </v-btn>
    <v-btn
      v-if="continuePath !== $route.path"
      class="my-10 mr-2"
      :class="{ 'float-right': $i18n.locale !== 'ar' ? true : false }"
      color="default"
      :disabled="!isChallengeWellDone"
    >
      {{ $t('printChallengeBtn') }}
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'ChallengePage',
  layout(context) {
    return context?.$vuetify?.breakpoint?.xs ? 'default-mobile' : 'default'
  },
  // middleware: 'activity-challenge', TODO: temporally disabled for rapid development.
  async asyncData({ params, store }) {
    const { activityId, challengeId } = params
    // This line adds translations for all app static URL slugs.
    await store.dispatch('i18n/setRouteParams', store.state.routeParams)
    return await { activityId, challengeId }
  },
  head() {
    return {
      titleTemplate: `%s - ${this.activityTranslation} ${this.activityId}, ` +
        `${this.challengeTranslation} ${this.challengeId}`
    }
  },
  computed: {
    activityTranslation() {
      const translation =
        this?.$store?.state?.routeParams?.[this.$i18n.locale]?.activity
      
      return translation.charAt(0).toUpperCase() + translation.slice(1)
    },
    challengeTranslation() {
      return this?.$store?.state?.routeParams?.[this.$i18n.locale]?.challenge
    },
    continuePath() {
      const nextChallengeId = window?.Number(this.challengeId) + 1
      const nextChallengePath = this.$store?.getters?.getLocaleActivityChallengeUrl(
        this.$i18n,
        this.activityId,
        nextChallengeId
      )
      const nextActivityId = window?.Number(this.activityId) + 1
      const nextActivityPath = this.$store?.getters?.getLocaleActivityChallengeUrl(
        this.$i18n,
        nextActivityId,
        1
      )
      const nextChallengePageStructure = this.getPageStructure(this.activityId, nextChallengeId)
      const nextActivityPageStructure = this.getPageStructure(nextActivityId, 1)

      if (nextChallengePageStructure.length) {
        return nextChallengePath
      } else if (nextActivityPageStructure.length) {
        return nextActivityPath
      } else {
        // TODO: Pensar si queremos redirigir a otra página cuando se complete el último reto.
        // Por el momento, ocultamos el botón de continuar en este caso.
        console.info('¡Felicidades, has completados la Unidad Didáctica!')
        return this.$route.path
      }
    },
    isChallengeWellDone() {
      return this.$store?.getters?.['learningUnit/isChallengeSolved'](
        this.activityId,
        this.challengeId
      )
    },
    pageStructure() {
      return this.getPageStructure(this.activityId, this.challengeId)
    }
  },
  beforeMount() {
    this.initializeWindowResize()
  },
  beforeDestroy() {
    this.$store.dispatch(
      'windowResize/destroyWindowResize',
      this.handleWindowResize
    )
  },
  methods: {
    getPageStructure(activityId, challengeId) {
      return this.$store
        ?.getters['learningUnit/getChallenge'](activityId, challengeId)
        ?.pageStructure ?? []
    },
    initializeWindowResize() {
      this.handleWindowResize = this.$store.dispatch(
        'windowResize/initializeWindowResize',
        this
      )
    }
  }
}
</script>
