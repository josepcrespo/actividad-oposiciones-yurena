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
        width: 800,
        height: 600,
        parent: 'phaserContainer',
        scene: [],
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 }
          }
        }
      },
      currentTile: { x: 0, y: 0 },
      game: null,
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
    this.board = this.createBoard()
  },
  mounted() {
    this.initPhaserGame()
  },
  methods: {
    initPhaserGame() {
      const gameScene = new Phaser.Scene('GameScene')
      gameScene.create = () => {
        this.addPhaserBoard(gameScene)
        this.addPhaserCar(gameScene)
        this.addPhaserControls(gameScene)
      }
      this.config.scene.push(gameScene)
      this.game = new Phaser.Game(this.config)
    },
    createBoard({ rows, columns, maxWeight } = {}) {
      // Verificar si se proporcionaron filas, columnas y/o peso máximo,
      // en caso contrario, asignar valores aleatorios
      rows = rows ?? this.$getRandomInt(3, 5)
      console.log("🚀 ~ createBoard ~ rows:", rows)
      columns = columns ?? this.$getRandomInt(3, 7)
      console.log("🚀 ~ createBoard ~ columns:", columns)
      maxWeight = maxWeight ?? this.$getRandomInt(3, 10)

      // Crea la matriz bidimensional
      const board = []

      // Generar la matriz y asignar conexiones y pesos aleatorios
      for (let x = 0; x < rows; x++) {
        board[x] = []
          for (let y = 0; y < columns; y++) {
          // Determinar si existe un elemento vecino en la matriz en cada dirección
          let up = x > 0
          let down = x < rows - 1
          let left = y > 0
          let right = y < columns - 1

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
            // Convierte el índice x/y a su correspondiente
            // letra del abecedario, en mayúscula.
            xIndex: this.$castIndexToCharacter(x, true),
            yIndex: this.$castIndexToCharacter(y, true),
            up,
            down,
            left,
            right,
            weightUp,
            weightDown,
            weightLeft,
            weightRight
          }

          // Agregar el elemento a la matriz
          board[x][y] = element
        }
      }

      return board
    },
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

      this.board.forEach((row, y) => {
        row.forEach((element, x) => {
          const posX = x * cellSize + cellSize / 2
          const posY = y * cellSize + cellSize / 2

          // Dibujar cuadrado para representar el elemento
          graphics.fillStyle(squareColor, 1)
          graphics.fillRect(posX - squareSize / 2, posY - squareSize / 2, squareSize, squareSize)

          // Dibujar índice del elemento en el centro del cuadrado
          scene.add.text(posX, posY, `${element.xIndex}${element.yIndex}`, textStyle).setOrigin(0.5)

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
      const carImage = 'img/phaserjs/car.png'
      this.car = scene.add.image(this.tileSize / 2, this.tileSize / 2, carImage)
      this.car.setOrigin(0.5)
    },
    addPhaserControls(scene) {
      scene.input.keyboard.on('keydown', (event) => {
        switch (event.code) {
          case this.keyboardEventCodes.arrowUp:
            console.info('⬆️ %s', this.keyboardEventCodes.arrowUp)
            this.movePhaserCar(0, -1, this.keyboardEventCodes.arrowUp)
            break
          case this.keyboardEventCodes.arrowDown:
            console.info('⬇️ %s', this.keyboardEventCodes.arrowDown)
            this.movePhaserCar(0, 1, this.keyboardEventCodes.arrowDown)
            break
          case this.keyboardEventCodes.arrowLeft:
            console.info('⬅️ %s', this.keyboardEventCodes.arrowLeft)
            this.movePhaserCar(-1, 0, this.keyboardEventCodes.arrowLeft)
            break
          case this.keyboardEventCodes.arrowRight:
            console.info('➡️ %s', this.keyboardEventCodes.arrowRight)
            this.movePhaserCar(1, 0, this.keyboardEventCodes.arrowRight)
            break
          default:
            break
        }
      })
    },
    movePhaserCar(deltaX, deltaY, direction) {
      const scene = this.config.scene[0]
      const newX = this.currentTile.x + deltaX
      const newY = this.currentTile.y + deltaY

      // Verificar si el movimiento está dentro de los límites de la matriz
      if (newX < 0 || newY < 0 || newX >= this.board.length || newY >= this.board[0].length) {
        return // Fuera de los límites, no se puede mover
      }

      const canMove = this.checkMove(newX, newY, direction)

      if (canMove) {
        const targetX = newX * this.tileSize + this.tileSize / 2
        const targetY = newY * this.tileSize + this.tileSize / 2
        this.currentTile.x = newX
        this.currentTile.y = newY

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
            this.moveTween = null
          }
        })
      }
    },
    checkMove(x, y, direction) {
      // Verificar si las coordenadas están dentro de los límites de la matriz
      if (x < 0 || y < 0 || x >= this.board[0].length || y >= this.board.length) {
        return false // Fuera de los límites de la matriz
      }

      // Obtener el elemento actual del coche
      const currentElement = this.board[this.currentTile.y][this.currentTile.x]

      // Obtener el elemento al que se desea mover
      const targetElement = this.board[x][y]

      if (
        direction === this.keyboardEventCodes.arrowDown &&
        // Si existe una conexión hacia abajo
        currentElement.down || targetElement.up &&
        y > this.currentTile.y
      ) {
        return true
      }

      if (
        direction === this.keyboardEventCodes.arrowLeft &&
        // Si existe una conexión hacia la izquierda
        currentElement.left || targetElement.right &&
        x < this.currentTile.x
      ) {
        return true
      }

      if (
        direction === this.keyboardEventCodes.arrowDown &&
        // Si existe una conexión hacia arriba
        currentElement.up || targetElement.down &&
        y < this.currentTile.y
      ) {
        return true
      }

      if (
        direction === this.keyboardEventCodes.arrowRight &&
        // Si existe una conexión hacia la derecha
        currentElement.right || targetElement.left &&
        x > this.currentTile.x
      ) {
        return true
      }

      // No hay una conexión válida entre los elementos
      return false
    }
  }
}
</script>
