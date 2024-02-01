<template>
  <v-card
    class="yrn-collection-card mx-2 my-6"
    elevation="5"
    max-height="480"
    max-width="320"
    min-height="480"
    min-width="320"
    rounded="xl"
  >
    <v-img
      :src="image"
      height="200px"
      @mouseover="handleMouseOver"
    />
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text>
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    image: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  methods: {
    handleMouseOver($event) {
      const vCardElement = $event.currentTarget.closest('.yrn-collection-card')

      vCardElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-collection-card {
  &.v-card {
    overflow-y: auto;

    .v-image {
      transition: all 0.25s ease-in-out;

      &:hover {
        height: 100% !important;
      }
    }
  }
}
</style>
