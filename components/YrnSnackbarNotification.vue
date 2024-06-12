<i18n lang="yaml">
es:
  closeBtn: "Cerrar"
ar:
  closeBtn: "أغلق"
ca:
  closeBtn: "Tanca"
de:
  closeBtn: "Schließen"
en:
  closeBtn: "Close"
eu:
  closeBtn: "Itxi"
fr:
  closeBtn: "Fermer"
gl:
  closeBtn: "Pechar"
it:
  closeBtn: "Chiudi"
ja:
  closeBtn: "閉じる"
pt:
  closeBtn: "Fechar"
ro:
  closeBtn: "Închide"
ru:
  closeBtn: "Закрыть"
zh:
  closeBtn: "关闭"
</i18n>

<template>
  <v-snackbar
    v-model="model"
    :app="app"
    class="yrn-snackbar-notification"
    :color="color"
    elevation="6"
    :right="right"
    :rounded="rounded"
    :timeout="timeout"
    :top="top"
  >
    <template #default>
      <span class="font-weight-black">
        {{ text }}
      </span>
    </template>
    <template #action="{ attrs }">
      <v-btn
        v-bind="attrs"
        class="yrn-snackbar-notification__close-btn"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        icon
        @click="closeSnackbarNotification()"
      >
        <v-icon>
          mdi-close-circle
        </v-icon>
      </v-btn>
      <yrn-memoji
        v-if="memojiName"
        class="yrn-snackbar-notification__memoji"
        height="128"
        :memoji-name="memojiName"
        width="128"
      />
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
    memojiName() {
      return this.$store?.state?.snackbarNotification?.memojiName
    },
    right() {
      return this.$store?.state?.snackbarNotification?.right
    },
    rounded() {
      return this.$store?.state?.snackbarNotification?.rounded
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
    closeSnackbarNotification() {
      this.$store?.commit('snackbarNotification/setModel', false)
    }
  }
}
</script>

<style lang="scss">
.yrn-snackbar-notification {
  .v-snack {
    &__content {
      padding-right: 128px;
    }

    &__action {
      display: flex;

      .v-image {
        position: absolute;
        right: 0;
      }

      .v-btn {
        left: -18px;
        position: absolute;
        top: -18px;

        &__content {
          background-color: white;
          border-radius: 100%;
          height: 20px;
          width: 20px;
        }
      }
    }
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--dark {
  .yrn-snackbar-notification {
    .v-snack {
      &__action {
        .v-btn {
          &__content {
            background-color: black;
          }
        }
      }
    }
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light {
  .yrn-snackbar-notification {
    .v-snack {
      &__action {
        .v-btn {
          &__content {
            background-color: white;
          }
        }
      }
    }
  }
}
</style>
