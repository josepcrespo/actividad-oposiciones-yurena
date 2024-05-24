<template>
  <yrn-find-shortest-path-game :custom-board="customBoard" :max-moves="9" />
</template>

<script>
import YrnFindShortestPathGame from '~/components/YrnFindShortestPathGame.vue'
export default {
  name: 'Test4Page',
  components: { YrnFindShortestPathGame },
  data() {
    return {
      customBoard: [
        [
          {
            up: false,
            down: 1.5,
            downIsHalfPath: true,
            left: false,
            right: 1.5,
            "rightIsHalfPath": true,
            rowIndex: "A",
            columnIndex: "A",
            nodeIndex: "AC",
            "nodeIndexWeight": 3,
            xAxisIndex: 0,
            yAxisIndex: 0
          },
          {
            up: false,
            down: 1,
            left: 1.5,
            "leftIsHalfPath": true,
            right: 5,
            rowIndex: "A",
            columnIndex: "B",
            nodeIndex: "A",
            xAxisIndex: 1,
            yAxisIndex: 0
          },
          {
            up: false,
            down: 3,
            left: 5,
            right: false,
            rowIndex: "A",
            columnIndex: "C",
            nodeIndex: "B",
            xAxisIndex: 2,
            yAxisIndex: 0
          },
          {
            up: false,
            down: false,
            left: false,
            right: false,
            rowIndex: "A",
            columnIndex: "D",
            nodeIndex: "",
            xAxisIndex: 3,
            yAxisIndex: 0
          }
        ], [
          {
            up: 1.5,
            down: 2,
            downIsHalfPath: true,
            left: false,
            right: false,
            rowIndex: "B",
            columnIndex: "A",
            nodeIndex: "C",
            xAxisIndex: 0,
            yAxisIndex: 1
          },
          {
            up: 1,
            down: 3,
            left: false,
            right: 2,
            rowIndex: "B",
            columnIndex: "B",
            nodeIndex: "D",
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            up: 3,
            down: 2,
            left: 2,
            right: 3,
            rowIndex: "B",
            columnIndex: "C",
            nodeIndex: "E",
            xAxisIndex: 2,
            yAxisIndex: 1
          },
          {
            up: false,
            down: 5,
            left: 3,
            right: false,
            rowIndex: "B",
            columnIndex: "D",
            nodeIndex: "H",
            xAxisIndex: 3,
            yAxisIndex: 1
          }
        ], [
          {
            up: 2,
            down: false,
            left: false,
            right: 2,
            "rightIsHalfPath": true,
            rowIndex: "C",
            columnIndex: "A",
            nodeIndex: "CF",
            "nodeIndexWeight": 4,
            xAxisIndex: 0,
            yAxisIndex: 2
          },
          {
            up: 3,
            down: 1.5,
            downIsHalfPath: true,
            left: 2,
            "leftIsHalfPath": true,
            right: 4,
            rowIndex: "C",
            columnIndex: "B",
            nodeIndex: "F",
            xAxisIndex: 1,
            yAxisIndex: 2
          },
          {
            up: 2,
            down: 3,
            left: 4,
            right: 6,
            rowIndex: "C",
            columnIndex: "D",
            nodeIndex: "G",
            xAxisIndex: 2,
            yAxisIndex: 2
          },
          {
            up: 5,
            down: 1,
            downIsHalfPath: true,
            left: 6,
            right: false,
            rowIndex: "C",
            columnIndex: "E",
            nodeIndex: "J",
            xAxisIndex: 3,
            yAxisIndex: 2
          }
        ], [
          {
            up: false,
            down: false,
            left: false,
            right: false,
            rowIndex: "D",
            columnIndex: "A",
            nodeIndex: "",
            xAxisIndex: 0,
            yAxisIndex: 3
          },
          {
            up: 1.5,
            down: false,
            left: false,
            right: 1.5,
            "rightIsHalfPath": true,
            rowIndex: "D",
            columnIndex: "B",
            nodeIndex: "FI",
            "nodeIndexWeight": 3,
            xAxisIndex: 1,
            yAxisIndex: 3
          },
          {
            up: 3,
            down: false,
            left: 1.5,
            "leftIsHalfPath": true,
            right: 1,
            "rightIsHalfPath": true,
            rowIndex: "D",
            columnIndex: "C",
            nodeIndex: "I",
            xAxisIndex: 2,
            yAxisIndex: 3
          },
          {
            up: 1,
            "upIsHalfPath": true,
            down: false,
            left: 1,
            "leftIsHalfPath": true,
            right: false,
            rowIndex: "D",
            columnIndex: "E",
            nodeIndex: "IJ",
            "nodeIndexWeight": 2,
            xAxisIndex: 3,
            yAxisIndex: 3
          }
        ]
      ]
    }
  }
}
</script>
