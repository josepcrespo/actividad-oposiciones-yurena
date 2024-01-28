<template>
  <v-card
    class="yrn-collection-card mx-auto pb-1 my-4"
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
  .v-card {
    &__text {
      height: 200px;
      overflow-y: auto;
    }
  }
}
</style>
