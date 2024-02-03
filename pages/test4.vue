<template>
  <v-row>
    <v-col
      class="d-flex justify-center"
      cols="12"
      sm="12"
      md="5"
    >
      <yrn-memoji
        memoji-name="director-señalando"
        class="mr-16 mr-md-0"
      />
    </v-col>
    <v-col
      class="d-flex justify-center ml-8 ml-md-0"
      cols="12"
      sm="12"
      md="7"
    >
      <vue-card-stack
        :cards="cards"
        :max-visible-cards="6"
        :scale-multiplier="0.5"
        :stack-width="$vuetify.breakpoint.xs ? 0 : 480"
        style="height: 525px;"
      >
        <template #card="{ card }">
          <yrn-collection-card
            :image="card.image"
            :link="card.link"
            :subtitle="card.scientificName"
            :text="card.description[$i18n.locale]"
            :title="card.name[$i18n.locale]"
            style="height: 100%; width: 100%;"
          />
        </template>
      </vue-card-stack>
    </v-col>
  </v-row>
</template>

<script>
/** 
 * @link https://rodleviton.github.io/vue-card-stack/
 * @link https://github.com/rodleviton/vue-card-stack/
 */
import VueCardStack from 'vue-card-stack'

export default {
  components: {
    VueCardStack
  },
  computed: {
    cards() {
      return this.$store?.getters['learningUnit/getExercise'](
        1,
        3,
        1
      )?.solution?.items
    }
  }
}
</script>

<style lang="scss">
.vue-card-stack {
  &__wrapper {
    width: 85vw;
  }

  &__stack {
    height: 100% !important;
    width: 100% !important;
  }
}

@media (width <  600px) {
  .vue-card-stack {
    &__wrapper {
      width: 100vw;
    }
  }
}
</style>
