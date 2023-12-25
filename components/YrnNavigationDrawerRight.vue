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
</i18n>

<template>
  <v-navigation-drawer
    v-model="drawerVisibility"
    class="yrn-navigation-drawer-right"
    fixed
    :right="true"
    temporary
  >
    <v-list>
      <v-list-item>
        <v-list-item-action class="mr-4">
          <v-icon>
            mdi-format-list-bulleted
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>
          {{ $t('drawerTitle') }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <!-- Learning Unit Activities List -->
    <v-treeview
      activatable
      dense
      disabled
      open-all
      open-on-click
      selectable
      selected-color="green"
      :items="treeviewItems"
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
        this.$store.commit('setNavigationDrawerRight', value)
      }
    },
    learningUnitActivities() {
      return this.$store.state.learningUnit.activities ?? []
    },
    treeviewItems() {
      const activitiesArray = []

      this.learningUnitActivities.forEach(activity => {
        const activityItem = {
          id: activity.activityId,
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
              id: challenge.challengeId,
              name: this.$t('challengeElement', { challengeId: challenge.challengeId })
            }

            if (
              challenge.exercises &&
              window?.Array?.isArray(challenge.exercises) &&
              challenge.exercises.length
            ) {
              const exercisesArray = []

              challenge.exercises.forEach(exercise => {
                exercisesArray.push({
                  id: exercise.exerciseId,
                  name: this.$t('exerciseElement', { exerciseId: exercise.exerciseId })
                })
              })
              challengeItem.children = exercisesArray
            }
            challengesArray.push(challengeItem)
          })
          activityItem.children = challengesArray
        }
        activitiesArray.push(activityItem)
      })

      return activitiesArray
    }
  }
}
</script>
