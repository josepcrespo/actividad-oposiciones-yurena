<i18n lang="yaml">
es:
  drawerTitle: "Progreso"
  activityElement: "Actividad {activityId}"
  challengeElement: "Reto {challengeId}"
  exerciseElement: "Ejercicio {exerciseId}"
ca:
  drawerTitle: "Progrés"
  activityElement: "Activitat {activityId}"
  challengeElement: "Reto {challengeId}"
  exerciseElement: "Exercici {exerciseId}"
en:
  drawerTitle: "Progress"
  activityElement: "Activity {activityId}"
  challengeElement: "Challenge {challengeId}"
  exerciseElement: "Exercise {exerciseId}"
de:
  drawerTitle: "Fortschritt"
  activityElement: "Aktivität {activityId}"
  challengeElement: "Herausforderung {challengeId}"
  exerciseElement: "Übung {exerciseId}"
ru:
  drawerTitle: "Прогресс"
  activityElement: "Активность {activityId}"
  challengeElement: "Задание {challengeId}"
  exerciseElement: "Упражнение {exerciseId}"
fr:
  drawerTitle: "Progrès"
  activityElement: "Activité {activityId}"
  challengeElement: "Défi {challengeId}"
  exerciseElement: "Exercice {exerciseId}"
it:
  drawerTitle: "Progresso"
  activityElement: "Attività {activityId}"
  challengeElement: "Sfida {challengeId}"
  exerciseElement: "Esercizio {exerciseId}"
eu:
  drawerTitle: "Egiten"
  activityElement: "Jarduer {activityId}"
  challengeElement: "Erronka {challengeId}"
  exerciseElement: "Ariketa {exerciseId}"
gl:
  drawerTitle: "Progreso"
  activityElement: "Actividade {activityId}"
  challengeElement: "Desafío {challengeId}"
  exerciseElement: "Exercicio {exerciseId}"
pt:
  drawerTitle: "Progresso"
  activityElement: "Atividade {activityId}"
  challengeElement: "Desafio {challengeId}"
  exerciseElement: "Exercício {exerciseId}"
ar:
  drawerTitle: "التقدم"
  activityElement: "{activityId} النشاط"
  challengeElement: "{challengeId} التحدي"
  exerciseElement: "{exerciseId} التمرين"
zh:
  drawerTitle: "进展"
  activityElement: "活动 {activityId}"
  challengeElement: "挑战 {challengeId}"
  exerciseElement: "练习 {exerciseId}"
ro:
  drawerTitle: "Progres"
  activityElement: "Activitate {activityId}"
  challengeElement: "Provocare {challengeId}"
  exerciseElement: "Exercițiu {exerciseId}"
ja:
  drawerTitle: "プログレソ"
  activityElement: "アクティビティ {activityId}"
  challengeElement: "チャレンジ {challengeId}"
  exerciseElement: "エクササイズ {exerciseId}"
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
                if (exercise.solution?.expected == exercise.solution?.fromUser) {
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
