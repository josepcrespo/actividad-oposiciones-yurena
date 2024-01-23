<template>
  <v-row
    class="yrn-drag-and-drop-list"
    style="min-height: 100px; background: blue;"
  >
    <v-col>
      <VueDraggable
        v-model="localItems"
        class="d-flex flex-column pa-4 ma-auto rounded overflow-auto"
        style="width: 300px; min-height: 200px; background-color: rgba(128 128  128 / 5%);"
        animation="150"
        ghost-class="yrn-drag-and-drop-list__ghost"
        :group="group"
        @update="onUpdate"
        @add="onAdd"
        @remove="onRemove"
        @change="onChange"
      >
        <div class="yrn-drag-and-drop-list__drop-area" />
        <div
          v-for="item in localItems"
          :key="item.id"
          class="rounded pa-3"
          style="cursor: move; height: 30px; background-color: rgba(128 128  128 / 5%);"
        >
          <v-img
            v-if="visibleProperty === 'image'"
            :src="item.image"
          />
          <v-chip
            v-else
            draggable
          >
            {{ getItemVisibleProperty(item) }}
          </v-chip>
        </div>
      </VueDraggable>
    </v-col>
  </v-row>
</template>

<script>
import { VueDraggable } from 'vue-draggable-plus'
import { v4 as newUuid } from 'uuid'

export default {
  name: 'YrnDragAndDropList',
  components: {
    VueDraggable
  },
  props: {
    group: {
      default: 'default-draggable-group',
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    visibleProperty: {
      default: 'name',
      type: String,
      required: false
    }
  },
  data() {
    return {
      localItems: []
    }
  },
  created() {
    this.localItems = this.transformArray(this.items)
  },
  methods: {
    getItemVisibleProperty(item) {
      return item[this.visibleProperty] ?? item.name
    },
    transformArray(originalArray) {
      const transformedArray = originalArray.map(item => {
        const newId = `${item.id}--${newUuid()}`

        return {
          ...item,
          id: newId
        }
      })

      return transformedArray
    },
    onChange(SortableEvent) {
      const matchedItems = this.localItems.filter((item) =>
        this.localItems.some((otherItem) => {
          return item.name === otherItem.name && item !== otherItem
        })
      )

      if (matchedItems.length > 0) {
        console.log(`A pair of same data items have been found in the list: %o`, matchedItems)
      }
      console.log('change: %o', SortableEvent)
    },
    onUpdate(SortableEvent) {
      console.log('update: %o', SortableEvent)
    },
    onAdd(SortableEvent) {
      console.log('add: %o', SortableEvent)
    },
    onRemove(SortableEvent) {
      console.log('remove: %o', SortableEvent)
    }
  }
}
</script>
