<template>
  <v-row class="yrn-image">
    <v-col>
      <a
        class="yrn-image__anchor-link"
        :href="linkUrl"
        target="_blank"
        :title="localizedLinkTitle"
      >
        <yrn-image-simple
          :alt="localizedImageAlt"
          :src="imageSrc"
        />
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnImage',
  props: {
    imageAlt: {
      default: '',
      required: false,
      type: String
    },
    imageSrc: {
      required: true,
      type: String
    },
    linkTitle: {
      default: '',
      required: false,
      type: String
    },
    linkUrl: {
      required: true,
      type: String
    }
  },
  computed: {
    localizedLinkTitle() {
      return this.linkTitle?.[this.$i18n.locale]
    },
    localizedImageAlt() {
      return this.imageAlt?.[this.$i18n.locale]
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-image {
  &__anchor-link {
    cursor: zoom-in !important;
  }
}
</style>
