<i18n lang="yaml">
  ar:
    continueBtn: 'متابعة'
    exercise: 'تمرين'
    printBtn: 'طباعة'
    printBtnTooltip: 'قم بتنزيل التمارين التي تم حلها بشكل صحيح للمراجعة اللاحقة'
  ca:
    continueBtn: 'Continuar'
    exercise: 'Exercici'
    printBtn: 'Imprimir'
    printBtnTooltip: 'Descarrega els exercicis que estiguin correctament resolts per a la seva posterior revisió'
  de:
    continueBtn: 'Fortsetzen'
    exercise: 'Übung'
    printBtn: 'Drucken'
    printBtnTooltip: 'Laden Sie die korrekt gelösten Übungen für die spätere Überprüfung herunter'
  en:
    continueBtn: 'Continue'
    exercise: 'Exercise'
    printBtn: 'Print'
    printBtnTooltip: 'Download the correctly solved exercises for later review'
  es:
    continueBtn: 'Continuar'
    exercise: 'Ejercicio'
    printBtn: 'Imprimir'
    printBtnTooltip: 'Descarga los ejercicios que estén correctamente resueltos para su posterior revisión'
  eu:
    continueBtn: 'Jarraitu'
    exercise: 'Ariketa'
    printBtn: 'Inprimatu'
    printBtnTooltip: 'Eginak zuzen dauden ariketak deskargatu, ondorengo berrikuspenerako'
  fr:
    continueBtn: 'Continuer'
    exercise: 'Exercice'
    printBtn: 'Imprimer'
    printBtnTooltip: 'Téléchargez les exercices correctement résolus pour une révision ultérieure'
  gl:
    continueBtn: 'Continuar'
    exercise: 'Exercicio'
    printBtn: 'Imprimir'
    printBtnTooltip: 'Descarga os exercicios que estean correctamente resoltos para a súa revisión posterior'
  it:
    continueBtn: 'Continua'
    exercise: 'Esercizio'
    printBtn: 'Stampare'
    printBtnTooltip: 'Scarica gli esercizi risolti correttamente per una successiva revisione'
  ja:
    continueBtn: '続行'
    exercise: 'エクササイズ'
    printBtn: '印刷する'
    printBtnTooltip: '後で確認するために正しく解決された演習をダウンロードしてください'
  pt:
    continueBtn: 'Continuar'
    exercise: 'Exercício'
    printBtn: 'Imprimir'
    printBtnTooltip: 'Baixe os exercícios resolvidos corretamente para revisão posterior'
  ro:
    continueBtn: 'Continuați'
    exercise: 'Exercițiu'
    printBtn: 'Imprimați'
    printBtnTooltip: 'Descărcați exercițiile rezolvate corect pentru revizuirea ulterioară'
  ru:
    continueBtn: 'Продолжить'
    exercise: 'Упражнение'
    printBtn: 'Печать'
    printBtnTooltip: 'Скачайте правильно решенные упражнения для последующей проверки'
  zh:
    continueBtn: '继续'
    exercise: '练习'
    printBtn: '打印'
    printBtnTooltip: '下载正确解决的练习以供以后检查'
</i18n>

<template>
  <v-container>
    <nuxt-content
      v-if="challengeId == lastChallengeId"
      :document="document"
    />
    <component
      :is="item.type"
      v-for="(item, index) in pageStructure"
      :key="index"
      v-bind="item"
      :activity-id="activityId"
      :challenge-id="challengeId"
    />
    <v-btn
      v-if="showContinueBtn"
      class="my-10"
      :class="{ 'float-right': $i18n.locale !== 'ar' ? true : false }"
      color="primary"
      :disabled="!isChallengeWellDone"
      :to="continuePath"
    >
      {{ $t('continueBtn') }}
    </v-btn>
    <v-menu
      close-on-click
      close-on-content-click
      :disabled="challengeExercisesSolved.length === 0"
      offset-y
      top
    >
      <template #activator="{ on: menu, attrs }">
        <v-tooltip
          :left="$i18n.locale !== 'ar'"
          :right="$i18n.locale === 'ar'"
        >
          <template #activator="{ on: tooltip }">
            <v-btn
              v-if="challengeId != lastChallengeId"
              class="my-10 mr-2"
              :class="{ 'float-right': $i18n.locale !== 'ar' ? true : false }"
              color="default"
              :disabled="challengeExercisesSolved.length === 0"
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
            >
              {{ $t('printBtn') }}
            </v-btn>
          </template>
          <span>
            {{ $t('printBtnTooltip') }}
          </span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(exercise, index) in challengeExercisesSolved"
          :key="index"
          @click="$downloadMarkdown(
            getMarkdownFilename(exercise.exerciseId),
            $getExerciseSolutionAsMarkdown(activityId, challengeId, exercise.exerciseId)
          )"
        >
          <v-list-item-title>
            {{ $t('exercise') }} {{ exercise.exerciseId }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-container>
</template>

<script>
export default {
  name: 'ChallengePage',
  layout(context) {
    return context?.$vuetify?.breakpoint?.xs ? 'default-mobile' : 'default'
  },
  middleware: 'activity-challenge', // Comment this line for rapid development.
  async asyncData({ $content, app, params, store }) {
    const { activityId, challengeId } = params
    const currentLocale = app.i18n.locale || 'es'
    const lastChallengeId = 6
    let document = null

    // eslint-disable-next-line eqeqeq
    if (challengeId == lastChallengeId) {
      document = await $content(`/${currentLocale}/last-challenge`).fetch()
    }
    // This line adds translations for all app static URL slugs.
    await store.dispatch('i18n/setRouteParams', store.state.routeParams)
    return await { activityId, challengeId, document }
  },
  data() {
    return {
      lastChallengeId: 6,
      showPrintMenu: false
    }
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
    challenge() {
      return this.$store?.getters['learningUnit/getChallenge'](this.activityId, this.challengeId)
    },
    challengeExercisesSolved() {
      return this.challenge?.exercises.filter(e => this.isExerciseSolved(e.exerciseId)) ?? []
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
    isLastTypeExerciseSolutionOtp() {
      if (!Array.isArray(this.pageStructure)) {
        return false
      }

      const lastObject = this.pageStructure[this.pageStructure.length - 1]

      return lastObject?.type === 'yrn-exercise-solution-otp'
    },
    pageStructure() {
      return this.getPageStructure(this.activityId, this.challengeId)
    },
    showContinueBtn() {
      return this.continuePath !== this.$route.path /* &&
        this.isLastTypeExerciseSolutionOtp === false */
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
    getMarkdownFilename(exerciseId) {
      return `situacion-de-aprendizaje--${this.activityId}.${this.challengeId}.${exerciseId}.md`
    },
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
    },
    isExerciseSolved(exerciseId) {
      return this.$store?.getters?.['learningUnit/isExerciseSolved'](
        this.activityId,
        this.challengeId,
        exerciseId
      )
    }
  }
}
</script>

<style lang="scss">
.nuxt-content {
  blockquote {
    border-left: 5px solid grey;
    margin-left: 30px;
    padding: 15px 20px 1px;
    margin-right: 400px;
  }

  ul {
    margin-left: 20px;
  }

  video {
    border-radius: 10px;
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--dark {
  .nuxt-content {
    blockquote {
      background: rgba(255 255 255 / 10%);
    }
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light {
  .nuxt-content {
    blockquote {
      background: rgba(0 0 0 / 10%);
    }
  }
}
</style>
