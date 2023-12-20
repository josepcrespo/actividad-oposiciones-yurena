<template>
  <v-row class="yrn-alert-text">
    <v-col>
      <v-alert
        :border="border"
        :color="color"
      >
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnAlertText',
  props: {
    border: {
      default: 'left',
      required: false,
      type: String
    },
    color: {
      default: 'blue-grey',
      required: false,
      type: String
    },
    paragraphs: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-alert-text {
  // Custom style
}
</style>
