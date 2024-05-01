<template>
  <yrn-phaser-game :custom-board="customBoard" :max-moves="6" />
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
            "down": true,
            "left": false,
            "right": true,
            "rowIndex": "A",
            "columnIndex": "A"
          },
          {
            "up": false,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "A",
            "columnIndex": "B"
          },
          {
            "up": false,
            "down": false,
            "left": true,
            "right": false,
            "rowIndex": "A",
            "columnIndex": "C"
          },
          {
            "up": false,
            "down": true,
            "left": true,
            "right": false,
            "rowIndex": "A",
            "columnIndex": "D"
          },
          {
            "up": false,
            "down": true,
            "left": false,
            "right": true,
            "rowIndex": "A",
            "columnIndex": "E"
          },
          {
            "up": false,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "A",
            "columnIndex": "F"
          },
          {
            "up": false,
            "down": true,
            "left": true,
            "right": false,
            "rowIndex": "A",
            "columnIndex": "G"
          }
        ],
        [
          {
            "up": true,
            "down": true,
            "left": false,
            "right": true,
            "rowIndex": "B",
            "columnIndex": "A"
          },
          {
            "up": true,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "B",
            "columnIndex": "B"
          },
          {
            "up": false,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "B",
            "columnIndex": "C"
          },
          {
            "up": true,
            "down": true,
            "left": true,
            "right": false,
            "rowIndex": "B",
            "columnIndex": "D"
          },
          {
            "up": true,
            "down": true,
            "left": false,
            "right": true,
            "rowIndex": "B",
            "columnIndex": "E"
          },
          {
            "up": true,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "B",
            "columnIndex": "F"
          },
          {
            "up": true,
            "down": true,
            "left": true,
            "right": false,
            "rowIndex": "B",
            "columnIndex": "G"
          }
        ],
        [
          {
            "up": true,
            "down": true,
            "left": false,
            "right": false,
            "rowIndex": "C",
            "columnIndex": "A"
          },
          {
            "up": true,
            "down": false,
            "left": false,
            "right": true,
            "rowIndex": "C",
            "columnIndex": "B"
          },
          {
            "up": false,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "C",
            "columnIndex": "C"
          },
          {
            "up": true,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "C",
            "columnIndex": "D"
          },
          {
            "up": true,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "C",
            "columnIndex": "E"
          },
          {
            "up": true,
            "down": false,
            "left": true,
            "right": false,
            "rowIndex": "C",
            "columnIndex": "F"
          },
          {
            "up": true,
            "down": true,
            "left": false,
            "right": false,
            "weightUp": 0,
            "weightDown": 0,
            "weightLeft": 10,
            "weightRight": 0,
            "rowIndex": "C",
            "columnIndex": "G"
          }
        ],
        [
          {
            "up": true,
            "down": true,
            "left": false,
            "right": false,
            "rowIndex": "D",
            "columnIndex": "A"
          },
          {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "rowIndex": "D",
            "columnIndex": "B"
          },
          {
            "up": true,
            "down": true,
            "left": false,
            "right": true,
            "rowIndex": "D",
            "columnIndex": "C"
          },
          {
            "up": false,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "D",
            "columnIndex": "D"
          },
          {
            "up": true,
            "down": true,
            "left": true,
            "right": true,
            "rowIndex": "D",
            "columnIndex": "E"
          },
          {
            "up": false,
            "down": true,
            "left": true,
            "right": false,
            "rowIndex": "D",
            "columnIndex": "F"
          },
          {
            "up": true,
            "down": true,
            "left": false,
            "right": false,
            "rowIndex": "D",
            "columnIndex": "G"
          }
        ],
        [
          {
            "up": true,
            "down": false,
            "left": false,
            "right": true,
            "rowIndex": "E",
            "columnIndex": "A"
          },
          {
            "up": false,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "E",
            "columnIndex": "B"
          },
          {
            "up": true,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "E",
            "columnIndex": "C"
          },
          {
            "up": false,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "E",
            "columnIndex": "D"
          },
          {
            "up": true,
            "down": false,
            "left": true,
            "right": true,
            "rowIndex": "E",
            "columnIndex": "E"
          },
          {
            "up": true,
            "down": false,
            "left": true,
            "right": false,
            "rowIndex": "E",
            "columnIndex": "F"
          },
          {
            "up": true,
            "down": false,
            "left": false,
            "right": false,
            "rowIndex": "E",
            "columnIndex": "G"
          }
        ]
      ]
    }
  }
}
</script>
