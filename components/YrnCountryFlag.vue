<template>
  <div class="yrn-country-flag">
    <country-flag
      v-if="isRegularFlag(flagCode)"
      :country="flagCode"
      :rounded="false"
      class="yrn-country-flag__regular-flag"
    />
    <v-img
      v-else
      class="yrn-country-flag__regional-flag d-inline-block"
      height="19.5"
      width="26"
      :src="getRegionalFlagSrc(flagCode)"
    />
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: 'YrnCountryFlag',
  components: {
    CountryFlag
  },
  props: {
    flagCode: {
      required: true,
      type: String
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
    }
  }
}
</script>

<style lang="scss">
.yrn-country-flag {
  &__regular-flag {
    margin: -9.91px -0.9em -0.6em -0.7em !important;
    outline-style: auto;
  }

  &__regional-flag {
    margin-left: 2px;
    outline-color: darkgrey;
    outline-style: auto;
  }
}
</style>
