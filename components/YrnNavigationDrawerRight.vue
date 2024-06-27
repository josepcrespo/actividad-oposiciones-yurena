<i18n lang="yaml">
  ar:
    activityElement: "نشاط المدير"
    challengeElement: "{challengeId} التحدي"
    drawerTitle: "التقدم"
    exerciseElement: "{exerciseId} التمرين"
  ca:
    activityElement: "Activitat del director"
    challengeElement: "Reto {challengeId}"
    drawerTitle: "Progrés"
    exerciseElement: "Exercici {exerciseId}"
  de:
    activityElement: "Aktivität des Direktors"
    challengeElement: "Herausforderung {challengeId}"
    drawerTitle: "Fortschritt"
    exerciseElement: "Übung {exerciseId}"
  en:
    activityElement: "Director's activity"
    challengeElement: "Challenge {challengeId}"
    drawerTitle: "Progress"
    exerciseElement: "Exercise {exerciseId}"
  es:
    activityElement: "Actividad del director"
    challengeElement: "Reto {challengeId}"
    drawerTitle: "Progreso"
    exerciseElement: "Ejercicio {exerciseId}"
  eu:
    activityElement: "Zuzendariaren jarduera"
    challengeElement: "Erronka {challengeId}"
    drawerTitle: "Egiten"
    exerciseElement: "Ariketa {exerciseId}"
  fr:
    activityElement: "Activité du directeur"
    challengeElement: "Défi {challengeId}"
    drawerTitle: "Progrès"
    exerciseElement: "Exercice {exerciseId}"
  gl:
    activityElement: "Actividade do director"
    challengeElement: "Desafío {challengeId}"
    drawerTitle: "Progreso"
    exerciseElement: "Exercicio {exerciseId}"
  it:
    activityElement: "Attività del direttore"
    challengeElement: "Sfida {challengeId}"
    drawerTitle: "Progresso"
    exerciseElement: "Esercizio {exerciseId}"
  ja:
    activityElement: "ディレクターの活動"
    challengeElement: "チャレンジ {challengeId}"
    drawerTitle: "プログレソ"
    exerciseElement: "エクササイズ {exerciseId}"
  pt:
    activityElement: "Atividade do diretor"
    challengeElement: "Desafio {challengeId}"
    drawerTitle: "Progresso"
    exerciseElement: "Exercício {exerciseId}"
  ro:
    activityElement: "Activitatea directorului"
    challengeElement: "Provocare {challengeId}"
    drawerTitle: "Progres"
    exerciseElement: "Exercițiu {exerciseId}"
  ru:
    activityElement: "Активность директора"
    challengeElement: "{challengeId} задание"
    drawerTitle: "Прогресс"
    exerciseElement: "{exerciseId} упражнение"
  zh:
    activityElement: "主任活动"
    challengeElement: "挑战 {challengeId}"
    drawerTitle: "进展"
    exerciseElement: "练习 {exerciseId}"
</i18n>

<template>
  <v-navigation-drawer
    v-model="drawerVisibility"
    class="yrn-navigation-drawer-right"
    fixed
    :right="!rtlLanguage"
    temporary
  >
    <v-list>
      <v-list-item>
        <v-list-item-action class="mr-4">
          <v-icon>
            mdi-format-list-bulleted
          </v-icon>
        </v-list-item-action>
        <v-list-item-title class="text-uppercase font-weight-medium">
          {{ $t('drawerTitle') }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider class="yrn-navigation-drawer-right__v-divider mb-4" />
    <!-- Learning Unit Activities List -->
    <v-treeview
      v-model="treeview.activeItems"
      activatable
      dense
      disabled
      open-all
      open-on-click
      selectable
      :items="treeview.items"
    />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'YrnNavigationDrawerRight',
  computed: {
    drawerVisibility: {
      get() {
        return this.$store?.state?.navigationDrawerRight
      },
      set(value) {
        this.$store?.commit('setNavigationDrawerRight', value)
      }
    },
    rtlLanguage() {
      return this.$store?.state?.rtlLanguage ?? false
    },
    learningUnitActivities() {
      return this.$store?.state?.learningUnit?.activities ?? []
    },
    treeview() {
      const items = []
      const activeItems = []

      this.learningUnitActivities.forEach(activity => {
        const activityItem = {
          id: String(activity.activityId),
          name: this.$t('activityElement', { activityId: activity.activityId })
        }

        if (
          activity.challenges &&
          window?.Array?.isArray(activity.challenges) &&
          activity.challenges.length
        ) {
          const challengesArray = []

          activity.challenges.forEach(challenge => {
            const challengeItem = {
              id: `${activity.activityId}.${challenge.challengeId}`,
              name: this.$t('challengeElement', { challengeId: challenge.challengeId })
            }

            if (
              challenge.exercises &&
              window?.Array?.isArray(challenge.exercises) &&
              challenge.exercises.length
            ) {
              const exercisesArray = []

              challenge.exercises.forEach(exercise => {
                const exerciseTreeviewId =
                  `${activity.activityId}.${challenge.challengeId}.${exercise.exerciseId}`
                const exerciseItem = {
                  id: exerciseTreeviewId,
                  name: this.$t('exerciseElement', { exerciseId: exercise.exerciseId })
                }
                exercisesArray.push(exerciseItem)
                // eslint-disable-next-line eqeqeq
                if (this.isExerciseSolved(activity, challenge, exercise)) {
                  activeItems.push(exerciseTreeviewId)
                }
              })
              challengeItem.children = exercisesArray
            }
            challengesArray.push(challengeItem)
          })
          activityItem.children = challengesArray
        }
        items.push(activityItem)
      })

      return { items, activeItems }
    }
  },
  methods: {
    isExerciseSolved(activity, challenge, exercise) {
      return this.$store?.getters?.['learningUnit/isExerciseSolved'](
        activity.activityId,
        challenge.challengeId,
        exercise.exerciseId
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-navigation-drawer-right {
  .v-list-item {
    &__title {
      letter-spacing: 0.0893em;
    }
  }

  &__v-divider {
    width: 90%;
    margin: 0 auto;
  }
}
</style>

<style>
/* stylelint-disable-next-line selector-class-pattern */
.theme--dark.v-icon.v-icon.v-icon--disabled.mdi-checkbox-marked {
  color: #4CAF50 !important;
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light.v-icon.v-icon.v-icon--disabled.mdi-checkbox-marked {
  color: #4CAF50 !important;
}
</style>
