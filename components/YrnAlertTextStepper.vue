<template>
  <v-row class="yrn-alert-text-stepper">
    <v-col>
      <v-alert
        :border="border"
        :color="color"
      >
        <p class="mt-3">
          {{ currentLanguageParagraphs[currentParagraphIndex] }}
        </p>
        <nav class="d-flex justify-end">
          <v-btn
            v-show="hasPreviousParagraph"
            icon
            @click="handleOnPreviousBtnClick()"
          >
            <v-icon>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            icon
            @click="handleOnNextBtnClick()"
          >
            <v-icon v-if="isLastParagraph">
              mdi-reload
            </v-icon>
            <v-icon v-else>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </nav>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnAlertTextStepper',
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
  data() {
    return {
      currentParagraphIndex: 0
    }
  },
  computed: {
    currentLanguageParagraphs() {
      if (this.paragraphs?.[this.$i18n.locale]) {
        return this.paragraphs?.[this.$i18n.locale] ?? []
      } else {
        return this.paragraphs
      }
    },
    isLastParagraph() {
      return this.currentParagraphIndex === Object.keys(this.currentLanguageParagraphs).length - 1
    },
    hasPreviousParagraph() {
      return this.currentParagraphIndex > 0
    }
  },
  methods: {
    handleOnNextBtnClick() {
      if (
        this.currentParagraphIndex <
        Object.keys(this.currentLanguageParagraphs).length  - 1
      ) {
        this.currentParagraphIndex++
      } else {
        this.currentParagraphIndex = 0
      }
    },
    handleOnPreviousBtnClick() {
      if (this.currentParagraphIndex > 0) {
        this.currentParagraphIndex--
      } else {
        this.currentParagraphIndex = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-alert-text-stepper {
  .v-alert {
    color: white;
  }
}
</style>
