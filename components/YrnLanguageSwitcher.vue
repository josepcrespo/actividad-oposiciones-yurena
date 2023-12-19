<i18n lang="yaml">
es:
  buttonTitle: "Idioma"
  buttonTooltip: "Cambia el idioma"
ca:
  buttonTitle: "Idioma"
  buttonTooltip: "Canvia l'idioma"
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
            <span class="ml-2 d-none d-sm-block">
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
              :country="lang.flagCode"
              :rounded="true"
            />
            <span class="ml-2">
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
      return this.$store
        ?.state
        ?.learningUnit
        ?.languages
        ?.filter(lang => lang.code !== this.$i18n.locale) ?? []
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