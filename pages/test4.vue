<template>
  <v-row class="mb-10">
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
        style="height: 530px;"
        @move="handleMove"
      >
        <template #card="{ card }">
          <yrn-collection-card
            :class="{
              'top-card-moved-left': isCardMovedLeft,
              'top-card-moved-right': isCardMovedRight,
              'top-card-stopped': isCardStopped,
            }"
            :image="card.image"
            :link="card.link"
            :subtitle="card.scientificName"
            :text="card.description[$i18n.locale]"
            :title="card.name[$i18n.locale]"
            style="height: 100%; width: 100%;"
          />
        </template>
        <template #nav="{ onNext, onPrevious }">
          <nav>
            <v-btn icon @click="onPrevious">
              <v-icon>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn icon @click="onNext">
              <v-icon>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </nav>
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
  data() {
    return {
      isCardMovedLeft: false, 
      isCardMovedRight: false,
      isCardStopped: true
    }
  },
  computed: {
    cards() {
      return this.$store?.getters['learningUnit/getExercise'](
        1,
        3,
        1
      )?.solution?.items
    }
  },
  methods: {
    handleMove(movement) {
      console.log("🚀 ~ handleOnMove ~ movement:", movement)
      if (movement < 0) {
        this.isCardMovedLeft = true
        this.isCardMovedRight = false
        this.isCardStopped = false
      } else if (movement > 0) {
        this.isCardMovedLeft = false
        this.isCardMovedRight = true
        this.isCardStopped = false
      } else {
        this.isCardMovedLeft = false
        this.isCardMovedRight = false
        this.isCardStopped = true
      }
    }
  }
}
</script>

<style lang="scss">
.vue-card-stack {
  &__wrapper {
    width: 85vw;

    nav {
      position: relative;
      top: -40px;
    }
  }

  &__stack {
    height: 100% !important;
    width: 100% !important;
  }

  &__card:nth-of-type(3),
  &__card:nth-of-type(4),
  &__card:nth-of-type(5),
  &__card:nth-of-type(6) {
    filter: blur(2px);
  }

  // Mixin for transforming top cards of the stack
  @mixin transform-top-card($scale, $rotate, $translateY) {
    transform: scale($scale) rotate($rotate) translateY($translateY);
  }

  // Top cards of the stack
  &__card:nth-of-type(1),
  &__card:nth-of-type(2) {
    filter: blur(0);
    
    .yrn-collection-card {
      transition: transform 0.2s ease 0s;

      &.top-card-stopped {
        @include transform-top-card(1, 0, 0);
      }
    }
  }

  // Card coming from the right side, outside the stack,
  // that will be placed on top of the stack
  &__card:nth-of-type(1) {
    .yrn-collection-card {
      &.top-card-moved-left {
        @include transform-top-card(1.05, 3deg, -20px);
      }
    }
  }

  // Visible top card of the stack
  &__card:nth-of-type(2) {
    .yrn-collection-card {
      &.top-card-moved-right {
        @include transform-top-card(1.05, -3deg, -20px);
      }
    }
  }
}

@media (width <=  599px) {
  .vue-card-stack {
    &__wrapper {
      width: 100vw;
    }
  }
}
</style>
