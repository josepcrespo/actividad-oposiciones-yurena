<template>
  <v-container class="yrn-drag-and-drop-with-two-lists">
    <v-row>
      <v-col
        xl="6"
        lg="6"
        md="6"
        sm="6"
        xs="6"
        cols="12"
      >
        <h3 class="mb-1">
          {{ translatedDraggableItemsTitle }}
        </h3>
        <VueDraggable
          v-model="list1"
          :animation="150"
          class="d-flex flex-column"
          :group="{
            name: 'carMovements',
            pull: 'clone',
            put: false
          }"
          :sort="false"
        >
          <v-chip
            v-for="(element, index1) in list1"
            :key="getVForKey(index1)"
            class="yrn-drag-and-drop-with-two-lists__list-group-item my-2 py-7 rounded-xxl d-flex"
          >
            <v-icon
              v-if="element.icon"
              class="mr-2"
              color="orange"
            >
              {{ element.icon }}
            </v-icon>
            <span class="text-subtitle-1">
              {{ getElementVisibleProperty(element) }}
            </span>
            <v-icon class="ml-auto" large>
              mdi-drag-horizontal-variant
            </v-icon>
          </v-chip>
        </VueDraggable>
      </v-col>
      <v-col
        xl="6"
        lg="6"
        md="6"
        sm="6"
        xs="6"
        cols="12"
      >
        <h3 class="mb-4">
          {{ translatedDropAreaTitle }}
        </h3>
        <VueDraggable
          v-model="list2"
          :animation="150"
          class="yrn-drag-and-drop-with-two-lists__drop-list pa-3 rounded-xxl"
          :class="{ 'yrn-drag-and-drop-with-two-lists__drop-list--active-area': isDraggingElement }"
          group="carMovements"
        >
          <!-- vue-dragabble needs at least one element on the list to work -->
          <div v-if="list2.length === 0"/>
          <v-chip  
            v-for="(element, index2) in list2"
            :key="getVForKey(index2)"
            class="yrn-drag-and-drop-with-two-lists__list-group-item my-2 py-7 rounded-xxl d-flex"
          >
            <v-icon
              v-if="element.icon"
              class="mr-2"
              color="orange"
            >
              {{ element.icon }}
            </v-icon>
            <span class="text-subtitle-1">
              {{ getElementVisibleProperty(element) }}
            </span>
            <v-icon class="ml-auto" large>
              mdi-drag-horizontal-variant
            </v-icon>
            <v-btn
              icon
              @click="removeElementFromList(index2)"
            >
              <v-hover v-slot="{ hover }">
                <v-icon :color="hover ? 'red' : 'default'">
                  mdi-close-circle
                </v-icon>
              </v-hover>
            </v-btn>
          </v-chip>
        </VueDraggable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { v4 as newUuid } from 'uuid'
import { VueDraggable } from 'vue-draggable-plus'

export default {
  name: "YrnDragAndDropWithTwoLists",
  components: {
    VueDraggable
  },
  props: {
    draggableItemsTitle : {
      required: true,
      type: Object
    },
    dropAreaTitle: {
      required: true,
      type: Object
    },
    items: {
      required: true,
      type: Array
    },
    visibleProperty: {
      default: 'name',
      required: false,
      type: String
    }
  },
  data() {
    return {
      list1: [],
      list2: [],
      isDraggingElement: false
    }
  },
  computed: {
    translatedDraggableItemsTitle() {
      return this.draggableItemsTitle[this.$i18n.locale] ?? ''
    },
    translatedDropAreaTitle() {
      return this.dropAreaTitle[this.$i18n.locale] ?? ''
    }
  },
  created() {
    this.list1 = this.items
  },
  methods: {
    getElementVisibleProperty(element) {
      if (element?.[this.visibleProperty]?.[this.$i18n.locale]) {
        return element[this.visibleProperty][this.$i18n.locale]
      } else {
        return element[this.visibleProperty] ?? ''
      }
    },
    getVForKey(index) {
      return `${index}--${newUuid()}`
    },
    onEnd() {
      this.$nextTick(() => {
        this.isDraggingElement = false
      })
      // console.log("🚀 ~ onEnd ~ this.isDraggingElement:", this.isDraggingElement)
    },
    onStart() {
      this.$nextTick(() => {
        this.isDraggingElement = true
      })
      // console.log("🚀 ~ onStart ~ this.isDraggingElement:", this.isDraggingElement)
    },
    removeElementFromList(index, list = this.list2) {
      list.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.yrn-drag-and-drop-with-two-lists {
  .v-chip {
    &__content {
      display: flex !important;
      width: 100%;
    }
  }

  &__list-group-item {
    background-color: rgba(0 0 0 / 50%);
    cursor: grab;
  }

  &__drop-list {
    background-color: rgba(0 0 0 / 50%);
    border-color: rgb(255 255 255 / 50%);
    border-style: dashed;
    border-width: 3px;
    min-height: 196px;

    &--active-area {
      border-color: rgb(255 255 255 / 100%);
    }

    .yrn-drag-and-drop-with-two-lists {
      &__list-group-item {
        background-color: rgba(0 0 0 / 50%);
      }
    }
  }
}
</style>
