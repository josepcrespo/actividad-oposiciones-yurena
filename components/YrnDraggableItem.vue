<template>
  <div class="yrn-draggable-item ma-3">
    <v-tooltip bottom>
      <template #activator="{ on, attrs }">
        <v-btn
          v-if="visibleProperty === 'icon'"
          :class="{ 'elevation-12': isMouseOver }"
          draggable
          fab
          :large="$vuetify.breakpoint.smAndDown"
          rounded
          v-bind="attrs"
          v-on="on"
          @mouseover="onMouseOver"
          @mouseleave="onMouseLeave"
          @dragend="onDragEnd()"
          @dragstart="onDragStart($event, item, visibleProperty)"
        >
          <v-icon color="orange">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ getItemIconTitle(item) }}</span>
    </v-tooltip>
    <v-img
      v-if="visibleProperty === 'image' || showImageAndName"
      class="rounded-xxl"
      :class="{ 'elevation-12': isMouseOver }"
      draggable
      :width="$vuetify.breakpoint.xs ? 64 : 128"
      :height="$vuetify.breakpoint.xs ? 64 : 128"
      :src="item.image"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @dragend="onDragEnd()"
      @dragstart="onDragStart($event, item, visibleProperty)"
    />
    <v-chip
      v-if="visibleProperty !== 'image' && visibleProperty !== 'icon' || showImageAndName"
      :class="{ 'elevation-12': isMouseOver && !isDragging }"
      color="default"
      draggable
      pill
      text-color="default"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @dragend="onDragEnd()"
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
    showImageAndName: {
      default: false,
      required: false,
      type: Boolean
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
    getItemIconTitle(item) {
      return item?.title?.[this.$i18n.locale] ?? ''
    },
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
    cursor: grab;

  .v-image {
    border: 1px solid rgb(85 85 85 / 50%);
    box-shadow: none;
    transition-duration: 0.28s;
    transition-property: box-shadow, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .v-chip:active {
    box-shadow: none !important;
  }
}
</style>
