<template>
  <v-container>
    <v-row class="yrn-actividad-1-reto-1">
      <v-col>
        <h1 class="my-8 d-flex justify-center">
          ¿Qué Parque Nacional visitó el director?
        </h1>
        <v-row>
          <v-col>
            <a
              href="https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/files/formidable/ENP-Canarias.pdf"
              target="_blank"
              title="Haz clic para ampliar el mapa."
              class="yrn-actividad-1-reto-1__mapa"
            >
              <v-img
                src="/img/actividad-1/reto-1/imagen-de-cabecera.png"
                alt="Memoji del Director del IES El Galeón, mostrando un mapa de las Islas Canarias con los Parques Nacionales."
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    />
                  </v-row>
                </template>
              </v-img>
            </a>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-alert
              border="left"
              color="blue-grey"
            >
              <p>
                Durante el fin de semana, nuestro director ha visitado uno de los Parques Nacionales de nuestras islas.
              </p>
              <p>
                ¿Serán capaces de averiguar cuál?
              </p>
            </v-alert>
          </v-col>
        </v-row>
        <h2 class="mt-8 mb-4">
          Resuelvan las siguientes ecuaciones de primer grado para encontrar la clave secreta que necesitan para descubrir la primera pista:
        </h2>
        <yrn-exercise-sections-group-progress
          class="mb-2"
          :current="sectionsWellSolved.length"
          :total="exerciseSections.length"
        />
        <yrn-exercise-sections-group
          :activity-id="learningUnit.activityId"
          :challenge-id="learningUnit.challengeId"
          :exercise="exercise"
        />
        <yrn-exercise-sections-group-progress
          class="mt-2"
          :current="getExerciseSectionsWellSolved(1,1,1).length"
          :total="getExerciseSections().length"
        />
        <h2 class="mt-8">
          Escriban aquí la clave secreta usando las soluciones de las ecuaciones:
        </h2>
        <v-otp-input
          v-model="opt.model"
          :length="opt.expected.length"
          :disabled="opt.loading"
          :type="opt.type"
          @finish="optOnFinish"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Actividad1Reto1Page',
  middleware: 'actividad-1-reto-1',
  data() {
    return {
      learningUnit: {
        activityId: 1,
        challengeId: 1,
        exerciseId: 1
      },
      opt: {
        expected: '1044-271/3222-420-1',
        loading: false,
        model: 'aabcddefffghhiijkll',
        type: 'text'
      }
    }
  },
  computed: {
    sectionsWellSolved() {
      return this.getExerciseSectionsWellSolved(
        this.learningUnit.activityId,
        this.learningUnit.challengeId,
        this.learningUnit.exerciseId
      )
    },
    exercise() {
      return this.getExercise(
        this.learningUnit.activityId,
        this.learningUnit.challengeId,
        this.learningUnit.exerciseId
      )
    },
    exerciseSections() {
      return this.exercise?.sections ?? []
    }
  },
  methods: {
    getExercise(activityId, challengeId, exerciseId) {
      return this.$store.getters['learningUnit/getExercise'](
        activityId,
        challengeId,
        exerciseId
      )
    },
    getExerciseSections() {
      return this.exercise?.sections ?? []
    },
    getExerciseSectionsWellSolved(activityId, challengeId, exerciseId) {
      return this.$store.getters['learningUnit/getExerciseSectionsWellSolved'](
        activityId,
        challengeId,
        exerciseId
      )
    },
    optOnFinish(response) {
      this.$store.commit('actividad-1-reto-1/setUserResult', response)
      this.$store.commit('setPageLoadingOverlay', true)
      this.opt.loading = true
      setTimeout(() => {
        const optSuccess = response === this.opt.expected
        this.opt.loading = false
        this.$store.commit('setPageLoadingOverlay', false)
        this.$store.commit('snackbarNotification/setColor', optSuccess
          ? 'green darken-4'
          : 'error')
        this.$store.commit('snackbarNotification/setTextToShow', optSuccess
          ? this.$store.state.snackbarNotification.text.success
          : this.$store.state.snackbarNotification.text.error)
        this.$store.commit('snackbarNotification/setShowAction', !optSuccess)
        this.$store.commit('snackbarNotification/setTimeout', optSuccess
          ? 3000
          : -1)
        this.$store.commit('snackbarNotification/setModel', true)
        if (optSuccess) {
          setTimeout(() => {
            this.$router.push('/actividad-1/reto-2')
          }, 2000)
        }
      }, 2000)
    },
    optRetry() {
      this.opt.model = ''
      this.$store.commit('snackbarNotification/setModel', false)
    }
  }
}
</script>

<style lang="scss">
.yrn-actividad-1-reto-1 {
  &__mapa {
    cursor: zoom-in !important;
  }

  .v-alert {
    color: white;
  }

  .v-otp-input {
    input {
      font-family: monospace;
    }
  }
}
</style>
