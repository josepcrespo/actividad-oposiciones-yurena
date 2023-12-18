<template>
  <v-snackbar
    v-model="model"
    :app="app"
    :color="color"
    :right="right"
    :timeout="timeout"
    :top="top"
  >
    {{ text }}
    <template #action="{ attrs }">
      <v-btn
        v-bind="attrs"
        color="default"
        :style="{ display: (showAction ? 'flex' : 'none') }"
        @click="retry()"
      >
        Reintentar
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
    model() {
      return this.$store?.state?.snackbarNotification?.model
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
