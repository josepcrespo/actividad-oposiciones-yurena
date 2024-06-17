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
          :src="`${$config.baseURL}${imageSrc}`"
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
  layout(context) {
    return context?.$vuetify?.breakpoint?.xs ? 'default-mobile' : 'default'
  },
  data() {
    return {
      isWindowNarrow: window?.innerWidth < 600,
      simulatedTimeout: 1500,
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
  beforeMount() {
    this.initializeWindowResize()
  },
  mounted() {
    this.$set(
      this.otp,
      'expected',
      this.$store?.state?.learningUnit?.indexPage?.password?.expected
    )
  },
  beforeDestroy() {
    this.$store.dispatch(
      'windowResize/destroyWindowResize',
      this.handleWindowResize
    )
  },
  methods: {
    initializeWindowResize() {
      this.handleWindowResize = this.$store.dispatch(
        'windowResize/initializeWindowResize',
        this
      )
    },
    otpOnFinish (response) {
      this.otp.loading = true
      this.$store?.commit('setPageLoadingOverlay', true)
      this.$store?.commit('learningUnit/setPasswordFromUser', response)
      setTimeout(() => {
        const i18n = this.$i18n
        const success = response === this.otp.expected
        const memojiName = success
          ? 'director-bien'
          : 'director-mal'
        this.otp.loading = false
        this.$store?.commit('setPageLoadingOverlay', false)
        this.$store?.dispatch('snackbarNotification/show', {
          i18n,
          memojiName,
          success
        })
        setTimeout(() => {
          if (success) {
            this.$router.push(
              this.$store?.getters?.getLocaleActivityChallengeUrl(this.$i18n, 1, 1)
            )
          } else {
            this.otp.model = ''
          }
        }, this.simulatedTimeout)
      }, this.simulatedTimeout)
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
