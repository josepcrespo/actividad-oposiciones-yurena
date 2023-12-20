<template>
  <v-row class="yrn-image">
    <v-col>
      <a
        class="yrn-image__anchor-link"
        :href="linkUrl"
        target="_blank"
        :title="linkTitle"
      >
        <yrn-image-simple
          :alt="imageAlt"
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
