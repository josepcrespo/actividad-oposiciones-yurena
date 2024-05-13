<template>
  <yrn-phaser-game-2 :custom-board="customBoard" :max-moves="6" />
</template>

<script>
export default {
  name: 'Test4Page',
  data() {
    return {
      customBoard: [
        [
          {
            "up": false,
            "down": 1.5,
            "downIsHalfPath": true,
            "left": false,
            "right": 1.5,
            "rightIsHalfPath": true,
            "rowIndex": "A",
            "columnIndex": "A",
            "nodeIndex": "AC",
            "nodeIndexWeight": 3
          },
          {
            "up": false,
            "down": 1,
            "left": 1.5,
            "right": 5,
            "rowIndex": "A",
            "columnIndex": "B",
            "nodeIndex": "A"
          },
          {
            "up": false,
            "down": 3,
            "left": 5,
            "right": false,
            "rowIndex": "A",
            "columnIndex": "C",
            "nodeIndex": "B"
          },
          {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "rowIndex": "A",
            "columnIndex": "D",
            "nodeIndex": ""
          }
        ], [
          {
            "up": 1.5,
            "down": 2,
            "downIsHalfPath": true,
            "left": false,
            "right": false,
            "rowIndex": "B",
            "columnIndex": "A",
            "nodeIndex": "C"
          },
          {
            "up": 1,
            "down": 3,
            "left": false,
            "right": 2,
            "rowIndex": "B",
            "columnIndex": "B",
            "nodeIndex": "D"
          },
          {
            "up": 3,
            "down": 2,
            "left": 2,
            "right": 3,
            "rowIndex": "B",
            "columnIndex": "C",
            "nodeIndex": "E"
          },
          {
            "up": false,
            "down": 5,
            "left": 3,
            "right": false,
            "rowIndex": "B",
            "columnIndex": "D",
            "nodeIndex": "H"
          }
        ], [
          {
            "up": 2,
            "down": false,
            "downIsHalfPath": true,
            "left": false,
            "right": 2,
            "rightIsHalfPath": true,
            "rowIndex": "C",
            "columnIndex": "A",
            "nodeIndex": "CF",
            "nodeIndexWeight": 4
          },
          {
            "up": 3,
            "down": 1.5,
            "downIsHalfPath": true,
            "left": 2,
            "right": 4,
            "rowIndex": "C",
            "columnIndex": "B",
            "nodeIndex": "F"
          },
          {
            "up": 2,
            "down": 3,
            "left": 4,
            "right": 6,
            "rowIndex": "C",
            "columnIndex": "D",
            "nodeIndex": "G"
          },
          {
            "up": 5,
            "down": 1,
            "downIsHalfPath": true,
            "left": 6,
            "right": false,
            "rowIndex": "C",
            "columnIndex": "E",
            "nodeIndex": "J"
          }
        ], [
          {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "rowIndex": "D",
            "columnIndex": "A",
            "nodeIndex": ""
          },
          {
            "up": 1.5,
            "down": false,
            "left": false,
            "right": 1.5,
            "rightIsHalfPath": true,
            "rowIndex": "D",
            "columnIndex": "B",
            "nodeIndex": "FI",
            "nodeIndexWeight": 3
          },
          {
            "up": 3,
            "down": false,
            "left": 1.5,
            "right": 1,
            "rightIsHalfPath": true,
            "rowIndex": "D",
            "columnIndex": "C",
            "nodeIndex": "I"
          },
          {
            "up": true,
            "down": false,
            "left": false,
            "right": false,
            "rowIndex": "D",
            "columnIndex": "E",
            "nodeIndex": "IJ",
            "nodeIndexWeight": 2
          }
        ]
      ]
    }
  }
}
</script>
