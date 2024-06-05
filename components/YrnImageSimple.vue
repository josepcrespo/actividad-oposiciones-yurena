<template>
  <v-img
    class="yrn-image-simple"
    :alt="localizedAlt"
    :contain="contain"
    :max-height="maxHeight"
    :src="src"
  >
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        />
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'YrnImageSimple',
  props: {
    alt: {
      default: () => null,
      required: false,
      type: Object
    },
    contain: {
      default: false,
      required: false,
      type: Boolean
    },
    maxHeight: {
      default: undefined,
      required: false,
      type: [Number, String]
    },
    src: {
      required: true,
      type: String
    }
  },
  computed: {
    localizedAlt() {
      return this.alt?.[this.$i18n.locale]
    }
  }
}
</script>
