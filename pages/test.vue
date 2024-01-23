<template>
  <div>
    <VueDraggable
      v-model="list1"
      class="d-flex flex-column pa-4 ma-auto rounded overflow-auto"
      style="width: 300px; min-height: 200px; background-color: rgba(128 128  128 / 5%);"
      animation="150"
      ghost-class="ghost"
      group="people"
      @update="onUpdate"
      @add="onAdd"
      @remove="onRemove"
    >
      <div
        v-for="item in list1"
        :key="item.id"
        class="rounded pa-3"
        style="cursor: move; height: 30px; background-color: rgba(128 128  128 / 5%);"
      >
        {{ item.name }}
      </div>
    </VueDraggable>
    <VueDraggable
      v-model="list2"
      class="d-flex flex-column pa-4 ma-auto rounded overflow-auto"
      style="width: 300px; height: 300px; background-color: rgba(128 128  128 / 5%);"
      animation="150"
      group="people"
      ghost-class="ghost"
      @update="onUpdate"
      @add="onAdd"
      @remove="onRemove"
    >
      <div
        v-for="item in list2"
        :key="item.id"
        class="rounded pa-3"
        style="cursor: move; height: 30px; background-color: rgba(128 128  128 / 5%);"
      >
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<script>
import { VueDraggable } from 'vue-draggable-plus'

export default {
  name: 'TestPage',
  components: {
    VueDraggable
  },
  data() {
    return {
      list1: [
        { name: 'Joao', id: '1' },
        { name: 'Jean', id: '2' },
        { name: 'Johanna', id: '3' },
        { name: 'Juan', id: '4' }
      ],
      list2: [
        { name: 'Joao-2', id: '1-2' },
        { name: 'Jean-2', id: '2-2' },
        { name: 'Johanna-2', id: '3-2' },
        { name: 'Juan-2', id: '4-2' }
      ]
    }
  },
  methods: {
    onUpdate() {
      console.log('update')
    },
    onAdd() {
      console.log('add')
    },
    onRemove() {
      console.log('remove')
    }
  }
}
</script>
