<template>
  <v-container>
    <v-row>
      <v-col>
        <yrn-drag-and-drop-list
          group="draggable-group-1"
          :items="itemPairs"
          :visible-property="visibleProperty1"
        />
      </v-col>
      <v-col>
        <yrn-drag-and-drop-list
          group="draggable-group-2"
          :items="itemPairs"
          :visible-property="visibleProperty2"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <VueDraggable
          v-model="localItems"
          class="d-flex flex-column pa-4 ma-auto rounded overflow-auto"
          style="width: 300px; min-height: 200px; background-color: rgba(128 128  128 / 5%);"
          animation="150"
          ghost-class="yrn-drag-and-drop-list__ghost"
          @change="onChange"
        >
          <div
            v-for="item in localItems"
            :key="item.id"
            class="rounded pa-3"
            style="cursor: move; height: 30px; background-color: rgba(128 128  128 / 5%);"
          >
            {{ item.name }}
          </div>
        </VueDraggable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'YrnExerciseDragAndDropPairs',
  props: {
    exerciseId: {
      default: '',
      required: true,
      type: [Number, String]
    },
    itemPairs: {
      required: true,
      type: Array
    },
    visibleProperty1: {
      default: 'name',
      required: false,
      type: String
    },
    visibleProperty2: {
      default: 'image',
      required: false,
      type: String
    }
  },
  data() {
    return {
      items: [
        { name: 'Joao', id: '1', image: 'https://images.emulatorgames.net/sega-genesis/sonic-the-hedgehog-3.webp' },
        { name: 'Jean', id: '2', image: 'https://images.emulatorgames.net/sega-genesis/sonic-the-hedgehog-jue.webp' },
        { name: 'Johanna', id: '3', image: 'https://images.emulatorgames.net/sega-genesis/sonic-and-knuckles-sonic-3-jue.webp' },
        { name: 'Juan', id: '4', image: 'https://images.emulatorgames.net/playstation-2/grand-theft-auto-iii.webp' }
      ]
    }
  },
  methods: {
    onChange() {
      const matchedItems = this.localItems.filter((item) =>
        this.localItems.some((otherItem) => {
          return item.name === otherItem.name && item !== otherItem
        })
      )

      if (matchedItems.length > 0) {
        console.log(`A pair of same data items have been found in the list: %o`, matchedItems)
      }
    }
  }
}
</script>
