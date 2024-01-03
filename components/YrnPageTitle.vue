<template>
  <v-row class="yrn-page-title">
    <v-col>
      <h1 class="my-8 d-flex justify-center text-center">
        {{ localizedTitle }}
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnPageTitle',
  props: {
    title: {
      required: true,
      type: Object
    }
  },
  computed: {
    localizedTitle() {
      return this.title?.[this.$i18n.locale]
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-page-title {
  // Custom style
}
</style>