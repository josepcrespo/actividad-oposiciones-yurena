<template>
  <v-card
    class="yrn-collection-card mx-2 my-6"
    elevation="5"
    max-width="320"
    rounded="xl"
  >
    <v-img
      :src="image"
      height="200px"
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
  }
}
</script>

<style lang="scss" scoped>
.yrn-collection-card {
  &.v-card {
    max-height: 500px;
    overflow-y: clip;

    .v-image {
      transition: all 0.5s ease-in-out;

      &:hover {
        height: 100% !important;
      }
    }

    .v-card {
      &__text {
        height: 200px;
        overflow-y: auto;
      }
    }
  }
}
</style>
