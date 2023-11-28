<template>
  <v-row>
    <v-col>
      <h1 class="mb-8">
        ¿Qué Parque Nacional visitó el director?
      </h1>
      <v-row>
        <v-col>
          <img
            src="/img/actividad-1/reto-1/director-del-ies-galeon.png"
            alt="Memoji del Director del IES El Galeón, en Adeje"
          />
        </v-col>
        <v-col class="d-flex align-center">
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
        <v-col class="d-flex justify-center">
          <img
            src="/img/actividad-1/reto-1/parques-nacionales-islas-canarias.png"
            alt="Mapa de las Islas Canarias, donde se muestran las partes del territorio declaradas Parques Nacionales"
            class="my-5"
          />
        </v-col>
      </v-row>
      <h2 class="my-8">
        Resuelvan las siguientes ecuaciones de primer grado para encontrar la clave secreta que necesitan para continuar con el siguiente reto:
      </h2>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(mathProblem, index) in mathProblems"
          :key="index"
        >
          <v-expansion-panel-header>
            <div class="yrn-expansion-panel-header d-flex align-center">
              <v-icon class="mr-4">
                {{ mathProblem.exerciseIndex }})
              </v-icon>
              {{ mathProblem.statement }}
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <yrn-math-problem
              :solution="mathProblem.solution"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
</template>

<script>
export default {
  name: 'Actividad1Reto1Page',
  middleware: 'actividad-1-reto-1',
  data() {
    return {
      mathProblems: [{
        exerciseIndex: 'a',
        solution: 10,
        statement: '2x + 1 = 21'
      }, {
        exerciseIndex: 'b',
        solution: 4,
        statement: '7 = x + 3'
      }, {
        exerciseIndex: 'c',
        solution: 4,
        statement: '8x – 5x = x + 8'
      }, {
        exerciseIndex: 'd',
        solution: -2,
        statement: '3x = 9x + 12'
      }, {
        exerciseIndex: 'e',
        solution: 7,
        statement: '3x + 6 = 2x + 13'
      }, {
        exerciseIndex: 'f',
        solution: '1/3',
        statement: '5x – 7 = 2 – 4x'
      }, {
        exerciseIndex: 'g',
        solution: 2,
        statement: '5x – 8 + 2x = 7 + 4x – 9'
      }, {
        exerciseIndex: 'h',
        solution: 22,
        statement: '3x + x + 4 = 2x + 30'
      }, {
        exerciseIndex: 'i',
        solution: -4,
        statement: '4x + 7 – x = 5 + 2x'
      }, {
        exerciseIndex: 'j',
        solution: 2,
        statement: '4 – 2x + 13 = 10 – 9x + 7'
      }, {
        exerciseIndex: 'k',
        solution: 0,
        statement: '7x – 10 + x – 2 = 6x – 3 + 3x – 1'
      }, {
        exerciseIndex: 'l',
        solution: -1,
        statement: '5x – 7 + 2x = 3x – 3 + 4x – 5 + x'
      }],
      opt: {
        expected: '1044-271/3222-420-1',
        loading: false,
        model: 'aabcddefffghhiijkll',
        type: 'text'
      }
    }
  },
  // mounted() {
  //   this.mathProblems.forEach(function(mp) {
  //     console.log(mp.solution.toString())
  //   })
  // },
  methods: {
    optOnFinish(response) {
      this.$store.commit('actividad-1-reto-1/setUserResult', response)
      this.$store.commit('loading-overlay/setShow', true)
      this.opt.loading = true
      setTimeout(() => {
        const optSuccess = response === this.opt.expected
        this.opt.loading = false
        this.$store.commit('loading-overlay/setShow', false)
        this.$store.commit('snackbar/setColor', optSuccess
          ? 'green darken-4'
          : 'error')
        this.$store.commit('snackbar/setTextToShow', optSuccess
          ? this.$store.state.snackbar.text.success
          : this.$store.state.snackbar.text.error)
        this.$store.commit('snackbar/setShowAction', !optSuccess)
        this.$store.commit('snackbar/setTimeout', optSuccess
          ? 3000
          : -1)
        this.$store.commit('snackbar/setModel', true)
        if (optSuccess) {
          setTimeout(() => {
            this.$router.push('/actividad-1/reto-2')
          }, 2000)
        }
      }, 2000)
    },
    optRetry() {
      this.opt.model = ''
      this.$store.commit('snackbar/setModel', false)
    }
  }
}
</script>

<style lang="scss">
.yrn-expansion-panel-header {
  i {
    font-family: monospace;
  }

  font-family: MartelSans, monospace;
  font-size: 20px;
}

.v-otp-input {
  input {
    font-family: monospace;
  }
}
</style>
