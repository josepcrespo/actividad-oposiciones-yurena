<i18n lang="yaml">
es:
  buttonTitle: "Idioma"
  buttonTooltip: "Cambia el idioma"
ca:
  buttonTitle: "Idioma"
  buttonTooltip: "Canvia l'idioma"
en:
  buttonTitle: "Language"
  buttonTooltip: "Change the language"
de:
  buttonTitle: "Sprache"
  buttonTooltip: "Sprache ändern"
ru:
  buttonTitle: "Язык"
  buttonTooltip: "Изменить язык"
fr:
  buttonTitle: "Langage"
  buttonTooltip: "Changer de langue"
it:
  buttonTitle: "Lingua"
  buttonTooltip: "Cambia la lingua"
eu:
  buttonTitle: "Hizkuntza"
  buttonTooltip: "Aldatu hizkuntza"
gl:
  buttonTitle: "Idioma"
  buttonTooltip: "Cambia o idioma"
pt:
  buttonTitle: "Idioma"
  buttonTooltip: "Mudar o idioma"
ar:
  buttonTitle: ":اللغة"
  buttonTooltip: "غيّر اللغة"
zh:
  buttonTitle: "语言"
  buttonTooltip: "更改语言"
ro:
  buttonTitle: "Limbă"
  buttonTooltip: "Schimbă limba"
ja:
  buttonTitle: "言語"
  buttonTooltip: "言語を変更"
</i18n>

<template>
  <v-menu
    class="yrn-language-switcher"
    offset-y
  >
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            :icon="$vuetify.breakpoint.xs"
            text
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
          >
            <v-icon>
              mdi-translate
            </v-icon>
            <span class="ml-2 d-none d-md-block">
              {{ $t('buttonTitle') }}
            </span>
          </v-btn>
        </template>
        <span>{{ $t('buttonTooltip') }}</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in learningUnitLanguages"
        :key="lang.code"
      >
        <v-list-item-title>
          <nuxt-link
            class="yrn-language-switcher__link text-h6 text-decoration-none font-weight-light"
            :to="switchLocalePath(lang.code)"
          >
            <country-flag
              v-if="isRegularFlag(lang.flagCode)"
              :country="lang.flagCode"
              :rounded="false"
            />
            <v-img
              v-else
              class="yrn-language-switcher__regional-flag d-inline-block"
              height="19.5"
              width="26"
              :src="getRegionalFlagSrc(lang.flagCode)"
            />
            <span :class="isRegularFlag(lang.flagCode) ? 'ml-2' : 'ml-2px'">
              {{ lang.name[$i18n.locale] }}
            </span>
          </nuxt-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
// https://github.com/ubaldop/vue-country-flag
import CountryFlag from 'vue-country-flag'

export default {
  name: 'YrnLanguageSwitcher',
  components: {
    CountryFlag
  },
  computed: {
    learningUnitLanguages() {
      return this.sortAlphabetically(this.$store
        ?.state
        ?.learningUnit
        ?.languages
        ?.filter(lang => lang.code !== this.$i18n.locale) ?? [],
        this.$i18n.locale
      )
    }
  },
  methods: {
    getRegionalFlagSrc(flagCode) {
      let flagIconSrc = '/img/flags/'

      switch (flagCode) {
        case 'es-eu':
          flagIconSrc += 'basque.png'
          break
        case 'es-gl':
          flagIconSrc += 'galician.png'
          break
        case 'ma':
          flagIconSrc += 'arabic.png'
          break
        default:
          flagIconSrc = ''
      }

      return flagIconSrc
    },
    isRegularFlag(flagCode) {
      return flagCode !== 'es-eu'
        && flagCode !== 'es-gl'
        && flagCode !== 'ma'
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
.ml-2px {
  margin-left: 2px;
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--dark {
  .yrn-language-switcher {
    &__link {
      color: white;
    }
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light {
  .yrn-language-switcher {
    &__link {
      color: black;
    }
  }
}
</style>
