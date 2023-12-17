<template>
  <v-row justify="center" align="center">
    <v-col class="text-center">
      <h1 class="mt-8">Situación de Aprendizaje</h1>
      <h2 class="mb-4">Flora + Fauna = Álgebra</h2>
      <img src="/img/index/profe-yure.png" alt="Memoji de la profesora Yurena Cabrera Hernández" />
      <h3><em>(Yurena Cabrera Hernández)</em></h3>
      <p class="mt-12 mb-4">
        Para empezar, introduce el código secreto que te proporcionará tu profesor:
      </p>
      <v-otp-input
        v-model="otp.model"
        length="6"
        :disabled="otp.loading"
        :type="otp.type"
        @finish="otpOnFinish"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      fakeTimeout: 2000,
      otp: {
        expected: '141592',
        loading: false,
        model: '',
        type: 'password'
      }
    }
  },
  methods: {
    otpOnFinish (response) {
      this.$store.commit('index-lock/setUserKey', response)
      this.$store.commit('loading-overlay/setShow', true)
      this.otp.loading = true
      setTimeout(() => {
        const otpSuccess = response === this.otp.expected
        this.otp.loading = false
        this.$store.commit('loading-overlay/setShow', false)
        this.$store.commit('snackbar/setColor', otpSuccess
          ? 'green darken-4'
          : 'error')
        this.$store.commit('snackbar/setTextToShow', otpSuccess
          ? this.$store.state.snackbar.text.success
          : this.$store.state.snackbar.text.error)
        this.$store.commit('snackbar/setShowAction', !otpSuccess)
        this.$store.commit('snackbar/setTimeout', otpSuccess
          ? 3000
          : -1)
        this.$store.commit('snackbar/setModel', true)
        setTimeout(() => {
          if (otpSuccess) {
            this.$router.push('/actividad-1/reto-1')
          } else {
            this.otp.model = ''
          }
        }, this.fakeTimeout)
      }, this.fakeTimeout)
    }
  }
}
</script>

<style scoped>
.v-otp-input {
  margin: 0 auto;
  max-width: 320px;
}
</style>
