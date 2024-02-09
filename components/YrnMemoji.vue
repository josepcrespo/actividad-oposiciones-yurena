<template>
  <v-img
    :height="height"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :src="`/img/memojis/${memojiName}.png`"
    :width="width"
    contain
  />
</template>

<script>
export default {
  props: {
    height: {
      default: undefined,
      required: false,
      type: [Number, String]
    },
    maxHeight: {
      default: undefined,
      required: false,
      type: [Number, String]
    },
    memojiName: {
      required: true,
      type: String
    },
    maxWidth: {
      default: undefined,
      required: false,
      type: [Number, String]
    },
    width: {
      default: undefined,
      required: false,
      type: [Number, String]
    }
  }
}
</script>
