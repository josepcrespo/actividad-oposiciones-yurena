<template>
  <v-row class="yrn-phaser-game">
    <v-col>
      <div id="phaserContainer" />
    </v-col>
  </v-row>
</template>

<script>
import * as Phaser from 'phaser'

export default {
  name: 'YrnPhaserGame',
  data() {
    return {
      board: [],
      car: null,
      config: {
        type: Phaser.AUTO,
        width: 600,
        height: 400,
        parent: 'phaserContainer',
        scene: [],
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 }
          }
        },
        scale: {
          mode: Phaser.Scale.FIT
        }
      },
      currentTile: { x: 0, y: 0 },
      game: null,
      isMoving: false,
      keyboardEventCodes: {
        arrowUp: 'ArrowUp',
        arrowDown: 'ArrowDown',
        arrowLeft: 'ArrowLeft',
        arrowRight: 'ArrowRight'
      },
      moveTween: null,
      tileSize: 100
    }
  },
  created() {
    do {
      this.board = this.createBoard()
    } while(this.checkIfPathExists() === false)
  },
  mounted() {
    this.initPhaserGame()
  },
  methods: {
    addPhaserBoard(scene) {
      const cellSize = 100
      const squareColor = 0xffffff
      const squareSize = 40
      const lineColor = 0xffffff
      const lineWidth = 40
      const textStyle = {
        fontSize: '24px',
        color: '#000000',
        fontFamily: 'Arial'
      }

      const graphics = scene.add.graphics()

      this.board.forEach((row, rowIndex) => {
        row.forEach((element, columnIndex) => {
          const posX = columnIndex * cellSize + cellSize / 2
          const posY = rowIndex * cellSize + cellSize / 2

          // Dibujar cuadrado para representar el elemento
          graphics.fillStyle(squareColor, 1)
          graphics.fillRect(
            posX - squareSize / 2,
            posY - squareSize / 2,
            squareSize,
            squareSize
          )

          // Dibujar índice del elemento en el centro del cuadrado
          scene.add.text(
            posX,
            posY,
            `${element.rowIndex}${element.columnIndex}`,
            textStyle
          ).setOrigin(0.5)

          // Dibujar conexiones con elementos adyacentes
          if (element.down) {
            graphics.lineStyle(lineWidth, lineColor)
            graphics.beginPath()
            graphics.moveTo(posX, posY + squareSize / 2)
            graphics.lineTo(posX, posY + cellSize - squareSize / 2)
            graphics.closePath()
            graphics.strokePath()
          }

          if (element.right) {
            graphics.lineStyle(lineWidth, lineColor)
            graphics.beginPath()
            graphics.moveTo(posX + squareSize / 2, posY)
            graphics.lineTo(posX + cellSize - squareSize / 2, posY)
            graphics.closePath()
            graphics.strokePath()
          }

          if (element.up) {
            graphics.lineStyle(lineWidth, lineColor)
            graphics.beginPath()
            graphics.moveTo(posX, posY - squareSize / 2)
            graphics.lineTo(posX, posY - cellSize + squareSize / 2)
            graphics.closePath()
            graphics.strokePath()
          }

          if (element.left) {
            graphics.lineStyle(lineWidth, lineColor)
            graphics.beginPath()
            graphics.moveTo(posX - squareSize / 2, posY)
            graphics.lineTo(posX - cellSize + squareSize / 2, posY)
            graphics.closePath()
            graphics.strokePath()
          }
        })
      })
    },
    addPhaserCar(scene) {
      try {
        this.car = scene.add.image(this.tileSize / 2, this.tileSize / 2, 'phaserImgCar')
        this.car.setOrigin(0.5)
      } catch (error) {
        console.error('Error adding car to scene: %o', error)
      }
    },
    addPhaserControls(scene) {
      scene.input.keyboard.on('keydown', (event) => {
        if (this.isMoving) { return }
        switch (event.code) {
          case this.keyboardEventCodes.arrowUp:
            this.movePhaserCar(-1, 0, this.keyboardEventCodes.arrowUp)
            break
          case this.keyboardEventCodes.arrowDown:
            this.movePhaserCar(1, 0, this.keyboardEventCodes.arrowDown)
            break
          case this.keyboardEventCodes.arrowLeft:
            this.movePhaserCar(0, -1, this.keyboardEventCodes.arrowLeft)
            break
          case this.keyboardEventCodes.arrowRight:
            this.movePhaserCar(0, 1, this.keyboardEventCodes.arrowRight)
            break
          default:
            break
        }
      })
    },
    checkMove(rowIndex, columnIndex, direction) {
      // Verificar si las coordenadas están dentro de los límites de la matriz
      if (
        rowIndex < 0 ||
        columnIndex < 0 ||
        rowIndex >= this.board.length ||
        columnIndex >= this.board[0].length
      ) {
        return false // Fuera de los límites de la matriz
      }

      // Obtener el elemento actual del vehículo
      const currentElement = this.board[this.currentTile.y][this.currentTile.x]

      // Obtener el elemento destino en la matriz
      const targetElement = this.board[rowIndex][columnIndex]

      if (
        direction === this.keyboardEventCodes.arrowDown &&
        // Si existe una conexión hacia abajo
        currentElement.down || targetElement.up &&
        rowIndex > this.currentTile.y
      ) {
        return true
      }

      if (
        direction === this.keyboardEventCodes.arrowLeft &&
        // Si existe una conexión hacia la izquierda
        currentElement.left || targetElement.right &&
        columnIndex < this.currentTile.x
      ) {
        return true
      }

      if (
        direction === this.keyboardEventCodes.arrowUp &&
        // Si existe una conexión hacia arriba
        currentElement.up || targetElement.down &&
        rowIndex < this.currentTile.y
      ) {
        return true
      }

      if (
        direction === this.keyboardEventCodes.arrowRight &&
        // Si existe una conexión hacia la derecha
        currentElement.right || targetElement.left &&
        columnIndex > this.currentTile.x
      ) {
        return true
      }

      // No hay una conexión válida entre los elementos
      return false
    },
    createBoard({ numRows, numCols, maxWeight } = {}) {
      // Verificar si se proporcionaron filas, columnas y/o peso máximo,
      // en caso contrario, asignar valores aleatorios
      numRows = numRows ?? this.$getRandomInt(3, 5)
      numCols = numCols ?? this.$getRandomInt(3, 7)
      maxWeight = maxWeight ?? this.$getRandomInt(3, 10)

      // Crea la matriz bidimensional
      const board = []

      // Generar la matriz y asignar conexiones y pesos aleatorios
      for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        board[rowIndex] = []
        for (let columnIndex = 0; columnIndex < numCols; columnIndex++) {
          // Determinar si existe un elemento, existente en la matriz,
          // adyacente en cada dirección
          let up = rowIndex > 0
          let down = rowIndex < numRows - 1
          let left = columnIndex > 0
          let right = columnIndex < numCols - 1

          // Asignar valor aleatorio de 'true' o 'false'
          // a las direcciones que tengan un vecino en la matriz, para determinar
          // si asignamos una conexión con dicho vecino en dicha dirección.
          up = up ? this.$getRandomBoolean() : false
          down = down ? this.$getRandomBoolean() : false
          left = left ? this.$getRandomBoolean() : false
          right = right ? this.$getRandomBoolean() : false

          // Asignar pesos aleatorios si hay conexiones
          const weightUp = up ? this.$getRandomInt(1, 10) : 0
          const weightDown = down ? this.$getRandomInt(1, 10) : 0
          const weightLeft = left ? this.$getRandomInt(1, 10) : 0
          const weightRight = right ? this.$getRandomInt(1, 10) : 0

          // Crear el objeto que representa el elemento del tablero
          const element = {
            up,
            down,
            left,
            right,
            weightUp,
            weightDown,
            weightLeft,
            weightRight,
            // Convierte el índice de la fila a su correspondiente
            // letra del abecedario, en mayúscula.
            rowIndex: this.$castIndexToCharacter(rowIndex, true),
            // Convierte el índice de la columna a su correspondiente
            // letra del abecedario, en mayúscula.
            columnIndex: this.$castIndexToCharacter(columnIndex, true)
          }

          // Agregar el elemento a la matriz
          board[rowIndex][columnIndex] = element
        }
      }

      return board
    },
    /**
     * Check if a path from position [0,0] to the last on the matrix
     * exists in the board using depth-first search.
     *
     * @return {boolean} true if a path exists, false otherwise
     */
    checkIfPathExists() {
      const numRows = this.board.length
      const numCols = this.board[0].length
      
      // Creamos una matriz de visitados inicialmente llena de falsos
      const visited = new Array(numRows).fill(false).map(() => new Array(numCols).fill(false))
      
      // Definimos una función recursiva para buscar el camino
      const dfs = (row, col) => {
        // Si estamos fuera de los límites de la matriz o ya hemos visitado esta celda, retornamos false
        if (row < 0 || row >= numRows || col < 0 || col >= numCols || visited[row][col]) {
          return false
        }
        
        // Marcamos esta celda como visitada
        visited[row][col] = true
        
        // Si estamos en la última celda, retornamos true
        if (row === numRows - 1 && col === numCols - 1) {
          return true
        }
        
        // Verificamos si podemos movernos hacia abajo, arriba, derecha o izquierda
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        for (const [dr, dc] of directions) {
          const newRow = row + dr
          const newCol = col + dc
          if (dfs(newRow, newCol)) {
            return true
          }
        }
        
        // Si no encontramos un camino válido, marcamos esta celda como no visitada para futuras exploraciones
        visited[row][col] = false
        
        return false
      }
      
      // Iniciamos la búsqueda desde la celda [0,0]
      return dfs(0, 0)
    },
    getGameContainerSize() {
      const parentElement = document.getElementById(this.config.parent)
      const width = parentElement.offsetWidth
      const height = width * (this.config.height / this.config.width)
      return { width, height }
    },
    initPhaserGame() {
      const gameScene = new Phaser.Scene('GameScene')

      gameScene.preload = () => {
        const carImage = 'img/phaserjs/car.96x96.png'
        gameScene.load.image('phaserImgCar', carImage)
      }

      gameScene.create = () => {
        const { width, height } = this.getGameContainerSize()
        this.game.scale.resize(width, height)

        this.addPhaserBoard(gameScene)
        this.addPhaserCar(gameScene)
        this.addPhaserControls(gameScene)
      }

      this.config.scene.push(gameScene)
      this.game = new Phaser.Game(this.config)
    },
    isDiagonalMove(deltaRowIndex, deltaColumnIndex) {
      // Si el movimiento es diagonal, devuelve true
      return !(Math.abs(deltaRowIndex) + Math.abs(deltaColumnIndex) === 1)
    },
    movePhaserCar(deltaRowIndex, deltaColumnIndex, direction) {
      const scene = this.config.scene[0]
      const newColumnIndex = this.currentTile.x + deltaColumnIndex
      const newRowIndex = this.currentTile.y + deltaRowIndex

      // Verificar si el movimiento está dentro de los límites de la matriz
      if (
        newColumnIndex < 0 ||
        newRowIndex < 0 ||
        newColumnIndex >= this.board[0].length ||
        newRowIndex >= this.board.length
      ) {
        return // Fuera de los límites, no se puede mover
      }

      // Verificar si la dirección de movimiento es válida
      if (this.isDiagonalMove(deltaRowIndex, deltaColumnIndex)) {
        // eslint-disable-next-line no-console
        console.warn('Movimiento no válido, no se puede mover en diagonal')
        return
      }

      const canMove = this.checkMove(newRowIndex, newColumnIndex, direction)

      if (canMove) {
        const targetX = newColumnIndex * this.tileSize + this.tileSize / 2
        const targetY = newRowIndex * this.tileSize + this.tileSize / 2
        this.currentTile.x = newColumnIndex
        this.currentTile.y = newRowIndex
        this.isMoving = true

        if (this.moveTween) {
          this.moveTween.stop()
        }

        this.moveTween = scene.tweens.add({
          targets: this.car,
          x: targetX,
          y: targetY,
          duration: 500,
          ease: 'Linear',
          onComplete: () => {
            this.isMoving = false
            this.moveTween = null
          }
        })
      }
    }
  }
}
</script>
