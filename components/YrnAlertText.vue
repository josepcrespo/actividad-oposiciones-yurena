<template>
  <v-row class="yrn-alert-text">
    <v-col>
      <v-alert
        :border="border"
        :color="color"
      >
        <p
          v-for="(paragraph, index) in currentLanguageParagraphs"
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
      type: Object
    }
  },
  computed: {
    currentLanguageParagraphs() {
      if (this.paragraphs?.[this.$i18n.locale]) {
        return this.paragraphs?.[this.$i18n.locale] ?? []
      } else {
        return this.paragraphs
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-alert-text {
  .v-alert {
    color: white;
  }
}
</style>
