<i18n lang="yaml">
es:
  retry: "Prueba otra vez"
ca:
  retry: "Prova de nou"
en:
  retry: "Try again"
de:
  retry: "Versuche es erneut"
ru:
  retry: "Попробуйте снова"
fr:
  retry: "Réessayer"
it:
  retry: "Riprova"
eu:
  retry: "Saiatu berriro"
gl:
  retry: "Téntao de novo"
pt:
  retry: "Tentar novamente"
ar:
  retry: "حاول مرة أخرى"
zh:
  retry: "再试一次"
ro:
  retry: "Încearcă din nou"
ja:
  retry: "もう一度試す"
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
        this.$store.commit('snackbarNotification/setModel', value)
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
      this.$store.commit('snackbarNotification/setModel', false)
    }
  }
}
</script>
