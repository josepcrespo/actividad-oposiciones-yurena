<template>
  <v-row class="yrn-page-title">
    <v-col>
      <h1 class="my-8 d-flex justify-center">
        {{ title }}
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
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-page-title {
  // Custom style
}
</style>