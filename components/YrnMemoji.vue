<template>
  <v-img
    :height="height"
    :src="`/img/memojis/${memojiName}.png`"
    :width="width"
  />
</template>

<script>
export default {
  props: {
    height: {
      default: 420,
      required: false,
      type: [Number, String]
    },
    memojiName: {
      required: true,
      type: String
    },
    width: {
      default: 420,
      required: false,
      type: [Number, String]
    }
  }
}
</script>
