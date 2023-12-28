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
  buttonTitle: "اللغة"
  buttonTooltip: "غيّر اللغة"
zh:
  buttonTitle: "语言"
  buttonTooltip: "更改语言"
ro:
  buttonTitle: "Limbă"
  buttonTooltip: "Schimbă limba"
ja:
  buttonTitle: "ランゲージ"
  buttonTooltip: "言語を変更する"
</i18n>

<template>
  <v-select
    v-model="currentLanguage"
    append-icon=""
    background-color="transparent"
    class="yrn-language-switcher"
    :color="$vuetify.theme.dark ? 'white' : 'black'"
    dense
    flat
    hide-details
    hide-selected
    :items="vSelectItems"
    item-text="name"
    item-value="code"
    :label="vSelectLabel"
    :menu-props="{
      closeOnContentClick: true,
      disableKeys: false,
      maxHeight: $vuetify?.breakpoint?.xs ? 284 : 380
    }"
    return-object
    solo
    @change="onSelectChange"
  >
    <template #selection>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            :icon="$vuetify.breakpoint.xs"
            text
            v-on="on"
          >
            <v-icon>
              mdi-translate
            </v-icon>
            <span class="mx-1 d-none d-md-block">
              {{ currentLanguageName }}
            </span>
          </v-btn>
        </template>
        <span>{{ $t('buttonTooltip') }}</span>
      </v-tooltip>
    </template>
    <template #item="{ item, on }">
      <!-- v-on="on" es necesario para que pase el evento al componente padre
        `v-select` y, pueda disparar el evento `@change`. -->
      <v-list-item
        ripple
        v-on="on"
      >
        <v-list-item-action>
          <country-flag
            v-if="isRegularFlag(item.flagCode)"
            :country="item.flagCode"
            :rounded="false"
          />
          <v-img
            v-else
            class="yrn-language-switcher__regional-flag d-inline-block"
            height="19.5"
            width="26"
            :src="getRegionalFlagSrc(item.flagCode)"
          />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-select>
</template>

<script>
// https://github.com/ubaldop/vue-country-flag
import CountryFlag from 'vue-country-flag'

export default {
  name: 'YrnLanguageSwitcher',
  components: {
    CountryFlag
  },
  data() {
    return {
      currentLanguage: {
        code: 'es',
        flagCode: 'es',
        name: 'ESPAÑOL'
      }
    }
  },
  computed: {
    currentLanguageName() {
      return this.getLanguageByCode(this.$i18n.locale)?.name
    },
    learningUnitLanguages() {
      return this.sortAlphabetically(this.$store
        ?.state
        ?.learningUnit
        ?.languages ?? [],
        this.$i18n.locale
      )
    },
    vSelectItems() {
      return this.learningUnitLanguages.map(language => {
        console.info('this.$i18n.locale: %s', this.$i18n.locale)
        const translation = language?.name?.[this.$i18n.locale]?.toUpperCase()
        console.info('translation: %s', translation)
        const name = translation ?? language?.name?.es?.toUpperCase()
        return {
          ...language,
          name
        }
      })
    },
    vSelectLabel() {
      return this.$t?.('buttonTitle')?.toUpperCase() ?? ''
    }
  },
  created() {
    this.currentLanguage = this.getLanguageByCode(this.$i18n.locale)
  },
  methods: {
    getLanguageByCode(languageCode) {
      return this.vSelectItems.find(language => {
        return language.code === languageCode
      })
    },
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
    onSelectChange() {
      /**
       * Ejecuta código después de que Vue.js ha completado su ciclo de vida y,
       * ha actualizado el DOM, $nextTick te permite esperar hasta ese momento.
       */
      this.$nextTick(() => {
        // https://i18n.nuxtjs.org/v7/lang-switcher
        // https://i18n.nuxtjs.org/v7/basic-usage#nuxt-link
        // https://i18n.nuxtjs.org/api/nuxt#switchlocalepath
        console.info('this.currentLanguage.name: %o', this.currentLanguage.name)
        const localizedUrl = this.switchLocalePath(this.currentLanguage.code)
        this.$router.push(localizedUrl)
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

<style lang="scss">
.v-input {
  width: 0;
  max-width: 185px;

  &__slot {
    padding: 0 !important;
  }

  .v-select {
    &__slot {
      .v-select {
        &__selections {
          justify-content: flex-end;
          
          span {
            width: 100%;
          }

          input {
            display: none !important;
          }
        }
      }
    }
  }
}
</style>