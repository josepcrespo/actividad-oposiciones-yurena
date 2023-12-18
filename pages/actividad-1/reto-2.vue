<template>
  <v-row>
    <v-col>
      <h1 class="my-8 d-flex justify-center">
        Viendo la imagen, ¿ya saben qué Parque Nacional visitó el director?
      </h1>
      <v-img
        src="/img/actividad-1/reto-2/imagen-de-cabecera.png"
        alt="El parque natural que visitó el director."
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
      <h2 class="mt-8 mb-4">
        Escriban aquí la respuesta:
      </h2>
      <v-otp-input
        v-model="opt.model"
        :length="opt.expected.length"
        :disabled="opt.loading"
        :type="opt.type"
        @finish="optOnFinish"
      />
      <v-chip
        v-if="opt.model === opt.expected"
        class="ma-2"
        color="green"
        label
        text-color="white"
      >
        <v-icon
          dark
          left
        >
          mdi-checkbox-marked-circle
        </v-icon>
        ¡Correcto!
      </v-chip>
      <h2 class="mt-8">
        Nuestro director es malísimo para recordar números pero le encantan las ecuaciones.
      </h2>
      <p>
        Resuelvan las siguientes ecuaciones de primer grado para decubrir los datos más relevantes del Parque Natural que visitó.
      </p>
      <yrn-exercise-sections-group-progress
        class="mb-2"
        :current="currentMathProblemsSolved"
        :total="mathProblems.length"
      />
      <yrn-exercise-sections-group
        :activity-id="learningUnit.activityId"
        :challenge-id="learningUnit.challengeId"
        :exercise-id="learningUnit.exerciseId"
      />
      <yrn-exercise-sections-group-progress
        class="mt-2"
        :current="currentMathProblemsSolved"
        :total="mathProblems.length"
      />
      <v-alert
        border="left"
        color="blue-grey"
        class="mt-8"
      >
        <p>
          Este Parque Nacional, situado en la isla de Tenerife, fue el primero reconocido del Archipiélago Canario, en el año <span class="callange-number">{{ challenge.anyo }}</span> y está presidido por El Teide (<span class="callange-number">{{ challenge.altura }}</span> metros), el pico más alto de España.
        </p>
        <p>
          Con numerosas especies endémicas y una extensión de <span class="callange-number">{{ challenge.extension }}</span> hectáreas, es, a día de hoy, el Parque más visitado de Canarias, de España y de Europa, ya que alberga uno de los más impresionantes espectáculos geológicos del mundo por la dificultad de encontrar en un espacio tan reducido, un conjunto de estas características.
        </p>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Actividad1Reto2Page',
  middleware: 'actividad-1-reto-2',
  data() {
    return {
      challenge: {
        anyo: '____',
        altura: '____',
        extension: '_____'
      },
      exerciseId: '1.2',
      mathProblems: [{
        index: 'a',
        solution: 1,
        statement: 'x + 2 = 3'
      }, {
        index: 'b',
        solution: 9,
        statement: '27 = 3x'
      }, {
        index: 'c',
        solution: 5,
        statement: '6x − 3 = 4x + 7'
      }, {
        index: 'd',
        solution: 4,
        statement: '2x + 9 = 3x + 5'
      }, {
        index: 'e',
        solution: 3,
        statement: '7 − 2x + 5 − 3x = −3'
      }, {
        index: 'f',
        solution: '7',
        statement: '4x + 7 = 35'
      }, {
        index: 'g',
        solution: 8,
        statement: '-3 − x = −2x + 5'
      }],
      opt: {
        expected: 'El Teide',
        loading: false,
        type: 'text'
      }
    }
  },
  computed: {
    challengeAnyo() {
      return ''
    },
    currentMathProblemsSolved() {
      return this.$store.state.exercises.solutions.filter((s) => {
        return s.exerciseId === this.exerciseId
      }).length
    }
  },
  methods: {
    optOnFinish(response) {
      this.$store.commit('actividad-1-reto-2/setNationalParkName', response)
      this.$store.commit('pageLoadingOverlay/setShow', true)
      this.opt.loading = true
      setTimeout(() => {
        const optSuccess = response === this.opt.expected
        this.opt.loading = false
        this.$store.commit('pageLoadingOverlay/setShow', false)
        this.$store.commit('snackbarNotification/setColor', optSuccess
          ? 'green darken-4'
          : 'error')
        this.$store.commit('snackbarNotification/setTextToShow', optSuccess
          ? this.$store.state.snackbar.text.success
          : this.$store.state.snackbar.text.error)
        this.$store.commit('snackbarNotification/setShowAction', !optSuccess)
        this.$store.commit('snackbarNotification/setTimeout', optSuccess
          ? 3000
          : -1)
        this.$store.commit('snackbarNotification/setModel', true)
        if (optSuccess) {
          setTimeout(() => {
            // this.$router.push('/actividad-1/reto-3')
            console.log('Redirecting to the next challenge')
          }, 2000)
        }
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.challenge-number {
  letter-spacing: 10px;
}
</style>
