<i18n lang="yaml">
ar:
  retry: "حاول مرة أخرى"
ca:
  retry: "Prova de nou"
de:
  retry: "Versuche es erneut"
en:
  retry: "Try again"
es:
  retry: "Prueba otra vez"
eu:
  retry: "Saiatu berriro"
fr:
  retry: "Réessayer"
gl:
  retry: "Téntao de novo"
it:
  retry: "Riprova"
ja:
  retry: "もう一度試す"
pt:
  retry: "Tentar novamente"
ro:
  retry: "Încearcă din nou"
ru:
  retry: "Попробуйте снова"
zh:
  retry: "再试一次"
</i18n>

<template>
  <v-snackbar
    v-model="model"
    :app="app"
    :color="color"
    :right="right"
    :timeout="timeout"
    :top="top"
  >
    <template #default>
        <span class="font-weight-black">{{ text }}</span>
    </template>
    <template #action="{ attrs }">
      <v-btn
        v-bind="attrs"
        color="default"
        :style="{ display: (showAction ? 'flex' : 'none') }"
        @click="retry()"
      >
        {{ $t('retry') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'YrnSnackbarNotification',
  computed: {
    app() {
      return this.$store?.state?.snackbarNotification?.app
    },
    color() {
      return this.$store?.state?.snackbarNotification?.color
    },
    model: {
      get() {
        return this.$store?.state?.snackbarNotification?.model
      },
      set(value) {
        this.$store?.commit('snackbarNotification/setModel', value)
      }
    },
    right() {
      return this.$store?.state?.snackbarNotification?.right
    },
    showAction() {
      return this.$store?.state?.snackbarNotification?.showAction
    },
    text() {
      return this.$store?.state?.snackbarNotification?.text?.toShow
    },
    timeout() {
      return this.$store?.state?.snackbarNotification?.timeout
    },
    top() {
      return this.$store?.state?.snackbarNotification?.top
    }
  },
  methods: {
    retry() {
      this.$store?.commit('snackbarNotification/setModel', false)
    }
  }
}
</script>
