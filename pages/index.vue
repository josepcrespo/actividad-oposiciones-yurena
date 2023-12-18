<template>
  <v-container>
    <v-row
      align="center"
      align-content="center"
      justify="center"
    >
      <v-col class="d-flex flex-column align-center text-center">
        <h1 class="mt-8">
          {{ title }}
        </h1>
        <h2 class="mb-4">
          {{ subtitle }}  
        </h2>
        <v-img
          max-height="320"
          max-width="320"
          :alt="imageAlt"
          :src="imageSrc"
        />
        <h3>
          <em>{{ author }}</em>
        </h3>
        <p class="mt-12 mb-4">
          {{ passwordStatement }}
        </p>
        <v-otp-input
          v-model="otp.model"
          :length="otp.expected.length"
          :disabled="otp.loading"
          :type="otp.type"
          @finish="otpOnFinish"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      timeout: {
        simulated: 1500,
        snackbarNotification: 3000
      },
      otp: {
        expected: '',
        loading: false,
        model: '',
        type: 'password'
      }
    }
  },
  computed: {
    author() {
      return this.$store?.state?.learningUnit?.indexPage?.author
    },
    imageAlt() {
      return this.$store?.state?.learningUnit?.indexPage?.image?.imageAlt?.[this.$i18n.locale]
    },
    imageSrc() {
      return this.$store?.state?.learningUnit?.indexPage?.image?.imageSrc
    },
    subtitle() {
      return this.$store?.state?.learningUnit?.indexPage?.subtitle?.[this.$i18n.locale]
    },
    title() {
      return this.$store?.state?.learningUnit?.indexPage?.title?.[this.$i18n.locale]
    },
    passwordStatement() {
      return this.$store?.state?.learningUnit?.indexPage?.password?.statement?.[this.$i18n.locale]
    },
  },
  mounted()  {
    this.$set(
      this.otp,
      'expected',
      this.$store?.state?.learningUnit?.indexPage?.password?.expected
    )
  },
  methods: {
    otpOnFinish (response) {
      this.$store.commit('learningUnit/setPasswordFromUser', response)
      this.$store.commit('pageLoadingOverlay/setShow', true)
      this.otp.loading = true
      setTimeout(() => {
        const otpSuccess = response === this.otp.expected
        this.otp.loading = false
        this.$store.commit('pageLoadingOverlay/setShow', false)
        this.$store.commit('snackbarNotification/setColor', otpSuccess
          ? 'green darken-4'
          : 'error')
        this.$store.commit('snackbarNotification/setTextToShow', otpSuccess
          ? this.$store.state.snackbarNotification.text.success
          : this.$store.state.snackbarNotification.text.error)
        this.$store.commit('snackbarNotification/setShowAction', !otpSuccess)
        this.$store.commit('snackbarNotification/setTimeout', otpSuccess
          ? this.timeout.snackbarNotification
          : -1)
        this.$store.commit('snackbarNotification/setModel', true)
        setTimeout(() => {
          if (otpSuccess) {
            this.$router.push('/activity/1/challange/1')
          } else {
            this.otp.model = ''
          }
        }, this.timeout.simulated)
      }, this.timeout.simulated)
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
