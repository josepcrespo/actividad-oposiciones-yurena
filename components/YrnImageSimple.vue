<template>
  <v-img
    class="yrn-image-simple"
    :alt="alt"
    :src="src"
  >
    <template #placeholder>
      <v-row
        class="fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular
          indeterminate
          color="grey lighten-5"
        />
      </v-row>
    </template>
  </v-img>
</template>

<script>
export default {
  name: 'YrnImageSimple',
  props: {
    alt: {
      default: '',
      required: false,
      type: String
    },
    src: {
      required: true,
      type: String
    }
  }
}
</script>
