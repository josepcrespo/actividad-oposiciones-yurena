<template>
  <div class="yrn-draggable-item ma-3">
    <v-img
      v-if="visibleProperty === 'image'"
      class="rounded-xxl"
      :class="{ 'elevation-12': isMouseOver }"
      draggable
      :width="$vuetify.breakpoint.xs ? 64 : 128"
      :height="$vuetify.breakpoint.xs ? 64 : 128"
      :src="item.image"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @dragend="onDragEnd($event)"
      @dragstart="onDragStart($event, item, visibleProperty)"
    />
    <v-chip
      v-else
      :class="{ 'elevation-12': isMouseOver && !isDragging }"
      color="default"
      draggable
      pill
      text-color="default"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @dragend="onDragEnd($event)"
      @dragstart="onDragStart($event, item, visibleProperty)"
    >
      {{ getItemVisibleProperty(item) }}
    </v-chip>
  </div>
</template>

<script>
/**
 * Based on:
 * @link https://learnvue.co/articles/vue-drag-and-drop#drag-and-drop-api
 */
export default {
  name: 'YrnDraggableItem',
  props: {
    dropEffect: {
      default: 'copy',
      required: false,
      type: String
    },
    effectAllowed: {
      default: 'copy',
      required: false,
      type: String
    },
    item: {
      required: true,
      type: Object
    },
    visibleProperty: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      isDragging: false,
      isMouseOver: false
    }
  },
  methods: {
    getItemVisibleProperty(item) {
      return item[this.visibleProperty]?.[this.$i18n.locale] ?? item.name
    },
    onMouseOver() {
      this.isMouseOver = true
    },
    onMouseLeave() {
      this.isMouseOver = false
    },
    onDragEnd() {
      this.isDragging = false
      this.$store?.commit('setIsDraggingAnItem', false)
    },
    onDragStart(event, item, itemType) {
      this.isDragging = true
      this.$store?.commit('setIsDraggingAnItem', true)
      event.dataTransfer.dropEffect = this.dropEffect
      event.dataTransfer.effectAllowed = this.effectAllowed
      event.dataTransfer.setData('draggedItemType', itemType)
      event.dataTransfer.setData('draggedItem', JSON.stringify(item))
    }
  }
}
</script>

<style lang="scss" scoped>
.yrn-draggable-item {
  :first-child {
    cursor: grab;
  }

  .v-image {
    border: 1px solid #555;
  }

  .v-chip:active {
    box-shadow: none !important;
  }
}
</style>
