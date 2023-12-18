<template>
  <v-menu
    class="yrn-language-switcher"
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in $store.state.learningUnit.languages"
        :key="lang.code"
      >
        <v-list-item-title>
          <nuxt-link
            class="yrn-language-switcher__link text-h6 text-decoration-none"
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