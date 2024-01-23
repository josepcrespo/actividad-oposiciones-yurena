<template>
  <v-row
    class="yrn-drag-and-drop-pair-check"
    style="min-height: 100px; background: red;"
  >
    <v-col>
      <yrn-drag-and-drop-list
        :filter="filterFunction"
        :group="group1"
        :items="items1"
        :visible-property="visibleProperty1"
      />
    </v-col>
    <v-col>
      <yrn-drag-and-drop-list
        :filter="filterFunction"
        :group="group2"
        :items="items2"
        :visible-property="visibleProperty2"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnDragAndDropPairCheck',
  props: {
    group1: {
      default: 'draggable-names-group',
      required: false,
      type: String
    },
    group2: {
      default: 'draggable-images-group',
      required: false,
      type: String
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
      items1: [],
      items2: [],
      // items1: [
      //   { name: 'Johanna', id: '3', image: 'https://images.emulatorgames.net/sega-genesis/sonic-and-knuckles-sonic-3-jue.webp' },
      //   { name: 'Juan', id: '4', image: 'https://images.emulatorgames.net/playstation-2/grand-theft-auto-iii.webp' }
      // ],
      // items2: [
      //   { name: 'Joao', id: '1', image: 'https://images.emulatorgames.net/sega-genesis/sonic-the-hedgehog-3.webp' },
      //   { name: 'Jean', id: '2', image: 'https://images.emulatorgames.net/sega-genesis/sonic-the-hedgehog-jue.webp' }
      // ]
    }
  },
  methods: {
    filterFunction(event) {
      console.info('event.target: %o', event.target)
      return event.target.innerHTML.includes('Drop Area')
    }
  }
}
</script>
