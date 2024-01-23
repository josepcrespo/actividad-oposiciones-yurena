<template>
  <v-container>
    <yrn-custom-drag-and-drop-solution :items="items" />
    <v-row>
      <v-col>
        <h2>Otro ejercicio</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Test3Page',
  data() {
    return {
      items: [{
        id: '1',
        image: '/img/actividad-1/reto-3/1-retamar.png',
        name: 'Retamar del Teide'
      }, {
        id: '2',
        image: '/img/actividad-1/reto-3/2-alheli.jpg',
        name: 'Alhelí del Teide'
      }, {
        id: '3',
        image: '/img/actividad-1/reto-3/3-margarita.jpg',
        name: 'Margarita del Teide'
      }, {
        id: '4',
        image: '/img/actividad-1/reto-3/4-violeta.jpg',
        name: 'Violeta del Teide'
      }, {
        id: '5',
        image: '/img/actividad-1/reto-3/5-tajinaste.png',
        name: 'Tajinaste Rojo del Teide'
      }, {
        id: '6',
        image: '/img/actividad-1/reto-3/6-abeja.png',
        name: 'Abeja'
      }, {
        id: '7',
        image: '/img/actividad-1/reto-3/7-tijereta.png',
        name: 'Tijereta endémica'
      }, {
        id: '8',
        image: '/img/actividad-1/reto-3/8-lagarto-tizon.jpg',
        name: 'Lagarto tizón'
      }
      ]
    }
  }
}
</script>
