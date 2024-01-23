<template>
  <v-row>
    <v-col>
      <yrn-drag-and-drop-list
        group="draggable-names-group"
        :items="items"
        visible-property="name"
      />
    </v-col>
    <v-col>
      <yrn-drag-and-drop-list
        group="draggable-images-group"
        :items="items"
        visible-property="image"
      />
    </v-col>
    <v-col cols="12">
      <div>
        <yrn-drag-and-drop-pair-check />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Test2Page',
  data() {
    return {
      items: [
        { name: 'Joao', id: '1', image: 'https://images.emulatorgames.net/sega-genesis/sonic-the-hedgehog-3.webp' },
        { name: 'Jean', id: '2', image: 'https://images.emulatorgames.net/sega-genesis/sonic-the-hedgehog-jue.webp' },
        { name: 'Johanna', id: '3', image: 'https://images.emulatorgames.net/sega-genesis/sonic-and-knuckles-sonic-3-jue.webp' },
        { name: 'Juan', id: '4', image: 'https://images.emulatorgames.net/playstation-2/grand-theft-auto-iii.webp' }
      ]
    }
  }
}
</script>
