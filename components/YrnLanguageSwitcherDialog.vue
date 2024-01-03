<i18n lang="yaml">
ar:
  dialogTitle: "لغة التطبيق"
ca:
  dialogTitle: "Idioma de l'aplicació"
de:
  dialogTitle: "Anwendungssprache"
en:
  dialogTitle: "Application Language"
es:
  dialogTitle: "Idioma de la aplicación"
eu:
  dialogTitle: "Aplikazioaren hizkuntza"
fr:
  dialogTitle: "Langue de l'application"
it:
  dialogTitle: "Lingua dell'applicazione"
ja:
  dialogTitle: "アプリケーション言語"
pt:
  dialogTitle: "Idioma da aplicação"
ro:
  dialogTitle: "Limba aplicației"
ru:
  dialogTitle: "Язык приложения"
zh:
  dialogTitle: "应用程序语言"
</i18n>

<template>
  <v-dialog
    v-model="vDialogModel"
    class="yrn-language-switcher-dialog"
    fullscreen
    hide-overlay
    scrollable
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
        color="primary"
        max-height="56px"
      >
        <v-btn
          icon
          @click.stop="closeVDialog()"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ $t('dialogTitle') }}
        </v-toolbar-title>
      </v-toolbar>
      <v-simple-table class="mt-8">
        <template #default>
          <tbody>
            <tr
              v-for="(language, indexLanguage) in learningUnitLanguages"
              :key="indexLanguage"
              class="yrn-language-switcher-dialog__table-row"
              @click="onLanguageClick(language.code)"
            >
              <td>
                <yrn-country-flag :flag-code="language.flagCode" />
              </td>
              <td>
                {{ language.name[$i18n.locale] }}
              </td>
              <td>
                {{ language.name.en }}
              </td>
              <td>
                {{ language.name.zh }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'YrnLanguageSwitcherDialog',
  computed: {
    learningUnitLanguages() {
      return this.sortAlphabetically(this.$store
        ?.state
        ?.learningUnit
        ?.languages ?? [],
        this.$i18n.locale
      )
    },
    vDialogModel: {
      get() {
        return this.$store?.state?.languageSwitcherDialog
      },
      set(value) {
        this.$store?.commit('setLanguageSwitcherDialog', value)
      }
    }
  },
  methods: {
    closeVDialog() {
      this.vDialogModel = false
    },
    onLanguageClick(langCode) {
      this.$nextTick(() => {
        // https://i18n.nuxtjs.org/v7/lang-switcher
        // https://i18n.nuxtjs.org/v7/basic-usage#nuxt-link
        // https://i18n.nuxtjs.org/api/nuxt#switchlocalepath
        const localizedUrl = this.switchLocalePath(langCode)
        this.$router.push(localizedUrl)
        this.closeVDialog()
      })
    },
    sortAlphabetically(languagesArray, languageCode) {
      return languagesArray.slice().sort((a, b) => {
        const stringA = a.name[languageCode].toUpperCase()
        const stringB = b.name[languageCode].toUpperCase()

        return stringA.localeCompare(stringB, undefined, { sensitivity: 'base' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-language-switcher-dialog {
  &__table-row {
    cursor: pointer;
  }
}
</style>
