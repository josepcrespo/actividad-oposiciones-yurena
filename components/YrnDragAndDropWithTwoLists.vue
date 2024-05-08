<template>
  <v-container ref="componentContainer" class="yrn-drag-and-drop-with-two-lists pa-0">
    <v-row>
      <v-col
        :xl="componentWidth > 400 ? 6 : 12"
        :lg="componentWidth > 400 ? 6 : 12"
        :md="componentWidth > 400 ? 6 : 12"
        :sm="componentWidth > 400 ? 6 : 12"
        xs="12"
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
            class="yrn-drag-and-drop-with-two-lists__list-group-item my-2 py-6 rounded-xxl d-flex"
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
        :xl="componentWidth > 400 ? 6 : 12"
        :lg="componentWidth > 400 ? 6 : 12"
        :md="componentWidth > 400 ? 6 : 12"
        :sm="componentWidth > 400 ? 6 : 12"
        xs="12"
        cols="12"
        :class="{ 'pt-3': componentWidth > 400 }"
      >
        <h3 class="mb-3">
          {{ translatedDropAreaTitle }}
        </h3>
        <VueDraggable
          v-model="list2"
          :animation="150"
          class="yrn-drag-and-drop-with-two-lists__drop-list pa-3 rounded-xxl"
          group="carMovements"
        >
          <!-- vue-dragabble needs at least one element on the list to work -->
          <div v-if="list2.length === 0"/>
          <v-chip  
            v-for="(element, index2) in list2"
            :key="getVForKey(index2)"
            class="yrn-drag-and-drop-with-two-lists__list-group-item my-2 py-6 rounded-xxl d-flex"
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
    <v-row>
      <v-col class="d-flex justify-center">
        <slot name="bottom"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// https://github.com/uuidjs/uuid
import { v4 as newUuid } from 'uuid'
// https://alfred-skyblue.github.io/vue-draggable-plus/en/
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
      componentWidth: 0,
      list1: [],
      list2: []
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
  mounted() {
    this.updateComponentWidth()
    window.addEventListener('resize', this.updateComponentWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateComponentWidth)
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
    removeElementFromList(index, list = this.list2) {
      list.splice(index, 1)
    },
    resetList2() {
      this.list2 = []
    },
    updateComponentWidth() {
      this.componentWidth = this.$refs?.componentContainer?.clientWidth ?? 0
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
    height: calc(100% - 48px);
    min-height: 128px;

    .yrn-drag-and-drop-with-two-lists {
      &__list-group-item {
        background-color: rgba(0 0 0 / 50%);
      }
    }
  }
}
</style>
