<i18n lang="yaml">
  es:
    requiredUsername: 'Debes introducir un nombre de usuario para continuar.'
  ar:
    requiredUsername: 'يجب عليك إدخال اسم مستخدم للمتابعة.'
  ca:
    requiredUsername: 'Has d’introduir un nom d’usuari per continuar.'
  de:
    requiredUsername: 'Sie müssen einen Benutzernamen eingeben, um fortzufahren.'
  en:
    requiredUsername: 'You must enter a username to continue.'
  eu:
    requiredUsername: 'Jarraitzeko, erabiltzaile izen bat sartu behar duzu.'
  fr:
    requiredUsername: 'Vous devez entrer un nom d’utilisateur pour continuer.'
  gl:
    requiredUsername: 'Debes introducir un nome de usuario para continuar.'
  it:
    requiredUsername: 'Devi inserire un nome utente per continuare.'
  ja:
    requiredUsername: '続行するにはユーザー名を入力する必要があります。'
  pt:
    requiredUsername: 'Você deve inserir um nome de usuário para continuar.'
  ro:
    requiredUsername: 'Trebuie să introduceți un nume de utilizator pentru a continua.'
  ru:
    requiredUsername: 'Вы должны ввести имя пользователя, чтобы продолжить.'
  zh:
    requiredUsername: '您必须输入用户名才能继续。'
</i18n>

<template>
  <v-container class="yrn-index">
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
        <v-form
          ref="form"
          v-model="form.state"
        >
          <v-text-field
            v-model="formModelUsername"
            class="my-12"
            :label="usernameStatement"
            :rules="[form.rules.requiredUsername]"
            required
          />
        </v-form>
        <p class="mb-4">
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
      form: {
        rules: {
          requiredUsername: value => !!value || this.$t('requiredUsername')
        },
        state: false,
      },
      isWindowNarrow: window?.innerWidth < 600,
      otp: {
        expected: '',
        loading: false,
        model: '',
        type: 'password'
      },
      simulatedTimeout: 1500,
    }
  },
  computed: {
    author() {
      return this.$store?.state?.learningUnit?.indexPage?.author
    },
    formModelUsername: {
      get() {
        return this.$store?.state?.learningUnit?.indexPage?.username?.fromUser
      },
      set(value) {
        this.$store?.commit('learningUnit/setUsernameFromUser', value)
      }
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
    usernameStatement() {
      return this.$store?.state?.learningUnit?.indexPage?.username?.statement?.[this.$i18n.locale]
    }
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
        const success = response === this.otp.expected && this.$refs.form?.validate()
        const memojiName = success
          ? 'director-bien'
          : 'director-mal'
        if (!success) { this.$store.commit('increaseErrorsCount') }
        this.otp.loading = false
        this.$store?.commit('setPageLoadingOverlay', false)
        this.$store?.dispatch('snackbarNotification/show', {
          i18n,
          memojiName,
          success
        })
        setTimeout(() => {
          if (success && this.$refs.form?.validate()) {
            this.$router.push(
              this.$store?.getters?.getLocaleActivityChallengeUrl(this.$i18n, 1, 1)
            )
          } else {
            this.otp.model = ''
            this.$store.commit('increaseErrorsCount')
          }
        }, this.simulatedTimeout)
      }, this.simulatedTimeout)
    }
  }
}
</script>

<style lang="scss" scoped>
  .yrn-index {
    .v-text-field {
      min-width: 400px;
    }

    .v-otp-input {
      margin: 0 auto;
      max-width: 320px;
    }
  }
</style>
