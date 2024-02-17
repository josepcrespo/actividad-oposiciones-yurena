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
  props: {
    useDefaultMovement: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      board: [],
      car: null,
      carColor: 'Red',
      carDirections: ['NORTH', 'EAST', 'SOUTH', 'WEST'],
      carName: 'COUPE',
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
          const indexText = `${element.rowIndex}${element.columnIndex}`

          this.drawPhaserSquare(graphics, posX, posY, squareColor, squareSize)
          this.addPhaserText(scene, posX, posY, indexText, textStyle)

          // Dibujar conexiones con elementos adyacentes:

          if (element.down) {
            this.drawPhaserLine(graphics, posX, posY + squareSize / 2, posX, posY + cellSize - squareSize / 2, lineWidth, lineColor)
          }

          if (element.right) {
            this.drawPhaserLine(graphics, posX + squareSize / 2, posY, posX + cellSize - squareSize / 2, posY, lineWidth, lineColor)
          }

          if (element.up) {
            this.drawPhaserLine(graphics, posX, posY - squareSize / 2, posX, posY - cellSize + squareSize / 2, lineWidth, lineColor)
          }

          if (element.left) {
            this.drawPhaserLine(graphics, posX - squareSize / 2, posY, posX - cellSize + squareSize / 2, posY, lineWidth, lineColor)
          }
        })
      })
    },
    addPhaserCar(scene) {
      try {
        // Crea el sprite animado en la posición inicial
        this.car = scene.add.sprite(
          this.tileSize / 2,
          this.tileSize / 2,
          'car_spritesheet_SOUTH'
        )
        this.car.setOrigin(0.5)

        // Define la animación del sprite
        scene.anims.create({
          key: 'car_animation_SOUTH',
          frames: scene.anims.generateFrameNumbers(
            'car_spritesheet_SOUTH', {
              start: 0,
              end: 11
            }
          ),
          frameRate: 12,
          repeat: -1 // repite la animación indefinidamente
        })

        this.car.play('car_animation_SOUTH')
      } catch (error) {
        console.error('Error adding car to scene: %o', error)
      }
    },
    addPhaserControls(scene) {
      const keyToDirection = {
        [this.keyboardEventCodes.arrowUp]: { deltaRowIndex: -1, deltaColumnIndex: 0, carDirection: 'NORTH' },
        [this.keyboardEventCodes.arrowDown]: { deltaRowIndex: 1, deltaColumnIndex: 0, carDirection: 'SOUTH' },
        [this.keyboardEventCodes.arrowLeft]: { deltaRowIndex: 0, deltaColumnIndex: -1, carDirection: 'WEST' },
        [this.keyboardEventCodes.arrowRight]: { deltaRowIndex: 0, deltaColumnIndex: 1, carDirection: 'EAST' },
      }

      scene.input.keyboard.on('keydown', (event) => {
        if (this.isMoving) { return }
        const direction = keyToDirection[event.code]
        if (direction) {
          const { deltaRowIndex, deltaColumnIndex, carDirection } = direction
          this.movePhaserCar(deltaRowIndex, deltaColumnIndex, event.code, carDirection)
        }
      })
    },
    addPhaserText(scene, posX, posY, text, textStyle) {
      // Añadir el texto en el centro del elemento
      scene.add.text(posX, posY, text, textStyle).setOrigin(0.5)
    },
    changeCarDirection(direction) {
      const newSpriteSheet = `img/phaserjs/top-down-vehicles/${this.carName}/` +
        `${this.carColor}/MOVE/${direction}/${this.carColor}_${this.carName}` +
        `_CLEAN_${direction}_000-sheet.PNG`
      this.car.anims.stop()
      this.car.setTexture(newSpriteSheet)
      this.car.play(`car_animation_${direction}`)
    },
    checkMove(fromRowIndex, fromColumnIndex, toRowIndex, toColumnIndex, direction) {
      // Salir del método si las coordenadas están fuera de los límites de la matriz
      if (
        toRowIndex < 0 ||
        toColumnIndex < 0 ||
        toRowIndex >= this.board.length ||
        toColumnIndex >= this.board[0].length
      ) {
        return false
      }

      const currentElement = this.board[fromRowIndex][fromColumnIndex]
      const targetElement = this.board[toRowIndex][toColumnIndex]

      switch (direction) {
        case this.keyboardEventCodes.arrowDown:
          return (currentElement.down || targetElement.up) &&
            toRowIndex > fromRowIndex
        case this.keyboardEventCodes.arrowLeft:
          return (currentElement.left || targetElement.right) &&
            toColumnIndex < fromColumnIndex
        case this.keyboardEventCodes.arrowUp:
          return (currentElement.up || targetElement.down) &&
            toRowIndex < fromRowIndex
        case this.keyboardEventCodes.arrowRight:
          return (currentElement.right || targetElement.left) &&
            toColumnIndex > fromColumnIndex
        default:
          return false
      }
    },
    createBoard({ numRows, numCols, maxWeight } = {}) {
      numRows = numRows ?? this.$getRandomInt(3, 5)
      numCols = numCols ?? this.$getRandomInt(3, 7)
      maxWeight = maxWeight ?? this.$getRandomInt(3, 10)
      
      return Array.from({ length: numRows }, (_, rowIndex) => {
        return Array.from({ length: numCols }, (_, columnIndex) => {
          return this.createBoardElement(rowIndex, columnIndex, numRows, numCols)
        })
      })
    },
    createBoardElement(rowIndex, columnIndex, numRows, numCols) {
      // Determinar si existe, un elemento en la matriz,
      // adyacente en cada dirección.
      const up = rowIndex > 0 ? this.$getRandomBoolean() : false
      const down = rowIndex < numRows - 1 ? this.$getRandomBoolean() : false
      const left = columnIndex > 0 ? this.$getRandomBoolean() : false
      const right = columnIndex < numCols - 1 ? this.$getRandomBoolean() : false
      const setWeightHelper = (condition) => {
        return condition ? this.$getRandomInt(1, 10) : 0
      }

      const weightUp = setWeightHelper(up)
      const weightDown = setWeightHelper(down)
      const weightLeft = setWeightHelper(left)
      const weightRight = setWeightHelper(right)

      const element = {
        up,
        down,
        left,
        right,
        weightUp,
        weightDown,
        weightLeft,
        weightRight,
        rowIndex: this.$castIndexToCharacter(rowIndex, true),
        columnIndex: this.$castIndexToCharacter(columnIndex, true)
      }

      return element
    },
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
    customPhaserCarMove(deltaRowIndex, deltaColumnIndex, direction, carDirection) {
      const scene = this.config.scene[0]
      let newRow = this.currentTile.y
      let newCol = this.currentTile.x

      // Se mueve en la dirección especificada hasta que ya no sea posible
      while (this.checkMove(
          this.currentTile.y,
          this.currentTile.x,
          newRow + deltaRowIndex,
          newCol + deltaColumnIndex,
          direction
        )
      ) {
        newRow += deltaRowIndex
        newCol += deltaColumnIndex
      }

      const targetX = newCol * this.tileSize + this.tileSize / 2
      const targetY = newRow * this.tileSize + this.tileSize / 2

      this.currentTile.x = newCol
      this.currentTile.y = newRow
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

      this.changeCarDirection(carDirection)
    },
    defaultPhaserCarMove(deltaRowIndex, deltaColumnIndex, direction, carDirection) {
      const scene = this.config.scene[0]
      const newColumnIndex = this.currentTile.x + deltaColumnIndex
      const newRowIndex = this.currentTile.y + deltaRowIndex

      // Salir del método si las coordenadas están fuera de los límites de la matriz
      if (
        newColumnIndex < 0 ||
        newRowIndex < 0 ||
        newColumnIndex >= this.board[0].length ||
        newRowIndex >= this.board.length
      ) {
        return
      }

      if (this.isDiagonalMove(deltaRowIndex, deltaColumnIndex)) {
        console.warn('Movimiento no válido, no se puede mover en diagonal')
        return
      }

      const canMove = this.checkMove(
        this.currentTile.y,
        this.currentTile.x,
        newRowIndex,
        newColumnIndex,
        direction
      )

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

        this.changeCarDirection(carDirection)
      }
    },
    drawPhaserLine(graphics, moveToX, moveToY, lineToX, lineToY, lineWidth, lineColor) {
      graphics.lineStyle(lineWidth, lineColor)
      graphics.beginPath()
      graphics.moveTo(moveToX, moveToY)
      graphics.lineTo(lineToX, lineToY)
      graphics.closePath()
      graphics.strokePath()
    },
    drawPhaserSquare(graphics, posX, posY, squareColor, squareSize) {
      graphics.fillStyle(squareColor, 1)
      graphics.fillRect(
        posX - squareSize / 2,
        posY - squareSize / 2,
        squareSize,
        squareSize
      )
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
        this.carDirections.forEach((direction) => {
          gameScene.load.spritesheet(
            `car_spritesheet_${direction}`,
            `img/phaserjs/top-down-vehicles/${this.carName}/${this.carColor}/` +
            `MOVE/${direction}/${this.carColor}_${this.carName}` +
            `_CLEAN_${direction}_000-sheet.PNG`, {
              frameWidth: 100,
              frameHeight: 100
            }
          )
        })
      }

      gameScene.create = () => {
        const { width, height } = this.getGameContainerSize()
        this.game.scale.resize(width, height)

        const totalFrames = 12
        const frameRate = 12

        this.carDirections.forEach((direction) => {
          gameScene.anims.create({
            key: `car_animation_${direction}`,
            frames: gameScene.anims.generateFrameNumbers(
              `car_spritesheet_${direction}`, {
                start: 0,
                end: totalFrames - 1,
                first: 0
              }
            ),
            frameRate,
            repeat: -1 // repite la animación indefinidamente
          })
        })

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
    movePhaserCar(deltaRowIndex, deltaColumnIndex, direction, carDirection) {
      if (this.useDefaultMovement) {
        this.defaultPhaserCarMove(deltaRowIndex, deltaColumnIndex, direction, carDirection)
      } else {
        this.customPhaserCarMove(deltaRowIndex, deltaColumnIndex, direction, carDirection)
      }
    }
  }
}
</script>
