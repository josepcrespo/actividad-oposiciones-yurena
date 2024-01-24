<i18n lang="yaml">
ar:
  dropHere: "اسحب هنا"
ca:
  dropHere: "Deixar ací"
de:
  dropHere: "Hier ablegen"
en:
  dropHere: "Drop here"
es:
  dropHere: "Suelta aquí"
eu:
  dropHere: "Hemen erabili"
fr:
  dropHere: "Déposer ici"
gl:
  dropHere: "Deixar aquí"
it:
  dropHere: "Rilascia qui"
ja:
  dropHere: "ここにドロップ"
pt:
  dropHere: "Solte aqui"
ro:
  dropHere: "Aici lasă"
ru:
  dropHere: "Бросьте сюда"
zh:
  dropHere: "在这里放下"
</i18n>

<template>
  <v-card
    class="yrn-drop-items-area ma-3 d-flex flex-grow-1 flex-shrink-0 rounded-xl"
    :class="{ 'yrn-drop-items-area__prominent': isDraggingAnItem }"
    elevation="0"
    @drop="onDrop($event)"
    @dragover.prevent
    @dragenter.prevent
  >
    <v-container>
      <v-row class="my-0">
        <v-col
          cols="12"
          class="d-flex justify-center"
        >
          <div
            class="text-subtitle-2 font-weight-light text-center"
            :class="{
              'text--primary': isDraggingAnItem,
              'text--disabled': !isDraggingAnItem
            }"
          >
            {{ dropAreaPlaceholder || $t('dropHere') }}
          </div>
        </v-col>
        <v-col
          v-for="(imageItem, imageItemIndex) in images"
          :key="`${imageItemIndex}--${imageItem.id}`"
          class="d-flex justify-center"
          cols="12"
        >
          <v-img
            class="rounded-xxl"
            :min-height="$vuetify.breakpoint.xs ? 64 : 128"
            :min-width="$vuetify.breakpoint.xs ? 64 : 128"
            :height="$vuetify.breakpoint.xs ? 64 : 128"
            :width="$vuetify.breakpoint.xs ? 64 : 128"
            :src="imageItem.image"
          />
        </v-col>
        <v-col
          class="d-flex justify-center pt-0"
          :class="{ 'pb-0': others.length > 0, 'pb-3': others.length === 0 }"
          cols="12"
        >
          <v-icon v-show="showPairValidation && hasTwinsPair">
            mdi-check-circle
          </v-icon>
          <v-icon v-show="showPairValidation && !hasTwinsPair">
            mdi-alert-circle-outline
          </v-icon>
        </v-col>
        <v-col
          v-for="(otherItem, otherItemIndex) in others"
          :key="`${otherItemIndex}--${otherItem.id}`"
          class="d-flex justify-center"
          cols="12"
        >
          <v-chip
            color="default"
            pill
            text-color="default"
          >
            {{ getItemVisibleProperty(otherItem) }}
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
/**
 * Based on:
 * @link https://learnvue.co/articles/vue-drag-and-drop#drag-and-drop-api
 */
export default {
  name: 'YrnDropItemsArea',
  props: {
    activityId: {
      required: true,
      type: [Number, String]
    },
    challengeId: {
      required: true,
      type: [Number, String]
    },
    dropAreaPlaceholder: {
      default: '',
      required: false,
      type: String
    },
    exerciseId: {
      required: true,
      type: [Number, String]
    },
    index: {
      required: true,
      type: Number
    },
    maxImageItems: {
      default: -1,
      required: false,
      type: Number
    },
    maxOtherItems: {
      default: -1,
      required: false,
      type: Number
    },
    showPairValidation: {
      default: false,
      required: false,
      type: Boolean
    },
    visibleProperty: {
      default: 'name',
      required: false,
      type: String
    }
  },
  data() {
    return {
      images: [],
      others: []
    }
  },
  computed: {
    droppedItems() {
      return {
        images: this.images,
        others: this.others
      }
    },
    exercise() {
      return this.$store?.getters['learningUnit/getExercise'](
        this.activityId,
        this.challengeId,
        this.exerciseId
      )
    },
    exerciseSolutionFromUser() {
      return this.exercise?.solution?.fromUser
    },
    hasTwinsPair() {
      let result = false

      if (this.maxImageItems === 1 && this.maxOtherItems === 1) {
        const imageItemName = this.images?.[0]?.name?.[this.$i18n.locale]
        const otherItemName = this.others?.[0]?.name?.[this.$i18n.locale]
        result = (imageItemName && otherItemName)
          ? imageItemName === otherItemName
          : false
      }

      return result
    },
    isDraggingAnItem() {
      return this.$store?.state?.isDraggingAnItem
    }
  },
  mounted() {
    this.images = this.exerciseSolutionFromUser?.[this.index]?.images ?? []
    this.others = this.exerciseSolutionFromUser?.[this.index]?.others ?? []
  },
  methods: {
    getItemVisibleProperty(item) {
      return item[this.visibleProperty]?.[this.$i18n.locale] ?? item.name
    },
    onDrop(event) {
      const draggedItemType = event.dataTransfer.getData('draggedItemType')
      if (draggedItemType) {
        let draggedItem = null

        try {
          draggedItem = JSON.parse(event.dataTransfer.getData('draggedItem'))
        } catch (error) {
          window?.console?.error(
            'Error al analizar el objeto JSON:',
            error.message
          )
        }
        if (draggedItem) {
          this.setLocalData(draggedItem, draggedItemType)
          this.$store?.commit('learningUnit/addOrUpdateExerciseSolutionFromUser', {
            activityId: this.activityId,
            challengeId: this.challengeId,
            exerciseId: this.exerciseId,
            solution: this.droppedItems,
            solutionIndex: this.index
          })
        }
      }
    },
    reset() {
      this.images = []
      this.others = []
      this.$store?.commit('learningUnit/setExerciseSolutionFromUser', {
        activityId: this.activityId,
        challengeId: this.challengeId,
        exerciseId: this.exerciseId,
        solution: []
      })
    },
    setLocalData(item, type) {
      if (type === 'image') {
        if (
          this.maxImageItems === -1 ||
          this.images?.length < this.maxImageItems
        ) {
          this.images?.push(item)
        } else {
          this.images = [item]
        }
      } else if (
        this.maxOtherItems === -1 ||
        this.others?.length < this.maxOtherItems
      ) {
        this.others?.push(item)
      } else {
        this.others = [item]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-drop-items-area {
  height: auto;
  flex-basis: min-content;

  // min-width: 250px;
  .v-image {
    border: 1px solid rgb(85 85 85 / 50%);
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--dark {
  .yrn-drop-items-area {
    border: 3px dashed rgb(255 255 255 / 50%);

    &__prominent {
      border: 3px dashed rgb(255 255 255 / 100%);
    }
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light {
  .yrn-drop-items-area {
    border: 3px dashed rgb(0 0 0 / 50%);

    &__prominent {
      border: 3px dashed rgb(0 0 0 / 100%);
    }
  }
}
</style>
