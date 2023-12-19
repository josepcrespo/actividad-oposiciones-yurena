<template>
  <v-overlay
    absolute
    :value="visibilityState"
  >
    <v-progress-circular
      indeterminate
      :color="color"
    />
  </v-overlay>
</template>

<script>
export default {
  name: 'YrnPageLoadingOverlay',
  data() {
    return {
      color: 'primary'
    }
  },
  computed: {
    visibilityState() {
      return this.$store?.state?.pageLoadingOverlay
    }
  }
}
</script>
