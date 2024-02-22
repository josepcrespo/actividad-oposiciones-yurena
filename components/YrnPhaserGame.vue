<template>
  <v-row
    class="yrn-phaser-game"
    :style="`height: calc(100vh - ${$vuetify.breakpoint.mdAndUp ? 64 : 56}px);`"
  >
    <v-col
      xl="3"
      lg="3"
      md="3"
      sm="12"
      xs="12"
      cols="12"
      :order="$vuetify.breakpoint.mdAndUp ? 'last' : 'first'"
    >
      <h1>Car Path</h1>
    </v-col>
    <v-col
      xl="9"
      lg="9"
      md="9"
      sm="12"
      xs="12"
      cols="12"
    >
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
      carDirections: {
        north: 'NORTH',
        east: 'EAST',
        south: 'SOUTH',
        west: 'WEST'
      },
      carName: 'COUPE',
      config: {
        autoRound: false,
        type: Phaser.AUTO,
        width: 824,
        height: 512,
        parent: 'phaserContainer',
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 }
          }
        },
        scale: {
          parent: 'phaserContainer',
          mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT
        },
        scene: []
      },
      currentTile: {
        spriteDirection: 'SOUTH',
        x: 0,
        y: 0 
      },
      game: null,
      isMoving: false,
      keyboardEventCodes: {
        arrowUp: 'ArrowUp',
        arrowDown: 'ArrowDown',
        arrowLeft: 'ArrowLeft',
        arrowRight: 'ArrowRight'
      },
      moveTween: null,
      textureKeys: {
        carElectricCharger: 'car_electric_charger_texture',
        minecraftDeepFloor: 'minecraft_deep_floor_texture',
        sceneBackground: 'scene_background_texture'
      },
      tileSize: 100
    }
  },
  created() {
    do {
      this.board = this.createBoard({ numRows: 5, numCols: 7 })
    } while(this.checkIfPathExists() === false)
  },
  mounted() {
    this.initPhaserGame()
  },
  methods: {
    addBackgroundImage(scene, backgroundTexture = this.textureKeys.sceneBackground) {
      const { width, height } = scene.sys.game.canvas
      const backgroundImage = scene.add.image(width / 2, height / 2, backgroundTexture)
      const scaleX = width / backgroundImage.width
      const scaleY = height / backgroundImage.height
      const scale = Math.max(scaleX, scaleY)
      backgroundImage.setOrigin(0.5, 0.5).setScale(scale).setDepth(-2)
    },
    addPhaserBoard(scene) {
      const cellSize = this.tileSize
      const squareSize = cellSize - (((56 * 100) / this.tileSize) * this.tileSize) / 100
      const lastRowIndex = this.board.length - 1
      const lastColumnIndex = this.board[0].length - 1
      const lineWidth = squareSize
      // const textStyle = {
      //   fontSize: '24px',
      //   color: '#000000',
      //   fontFamily: 'Arial'
      // }

      this.board.forEach((row, rowIndex) => {
        row.forEach((element, columnIndex) => {
          const posX = columnIndex * cellSize + cellSize / 2
          const posY = rowIndex * cellSize + cellSize / 2
          // const indexText = `${element.rowIndex}${element.columnIndex}`

          this.drawPhaserSquare(scene, posX, posY, squareSize)
          // this.addPhaserText(scene, posX, posY, indexText, textStyle)

          // Dibujar conexiones con elementos adyacentes
          if (element.down) {
            this.drawPhaserLine(
              scene,
              posX,
              posY + squareSize / 2,
              posX,
              posY + cellSize - squareSize / 2,
              lineWidth
            )
          }
          if (element.right) {
            this.drawPhaserLine(
              scene,
              posX + squareSize / 2,
              posY,
              posX + cellSize - squareSize / 2,
              posY,
              lineWidth
            )
          }
          if (element.up) {
            this.drawPhaserLine(
              scene,
              posX,
              posY - squareSize / 2,
              posX,
              posY - cellSize + squareSize / 2,
              lineWidth
            )
          }
          if (element.left) {
            this.drawPhaserLine(
              scene,
              posX - squareSize / 2,
              posY,
              posX - cellSize + squareSize / 2,
              posY,
              lineWidth
            )
          }

          if (rowIndex === lastRowIndex && columnIndex === lastColumnIndex) {
            const chargerX = posX + cellSize
            const chargerY = posY
            this.addPhaserCarStation(scene, chargerX, chargerY)
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
          `car_spritesheet_${this.currentTile.spriteDirection}`
        )
        this.car.setOrigin(0.5)
        this.car.setScale(1.5)
        this.car.play(`car_animation_${this.currentTile.spriteDirection}`)
      } catch (error) {
        console.error('Error adding car to scene: %o', error)
      }
    },
    addPhaserCarStation(scene, posX, posY, textureKey = this.textureKeys.carElectricCharger) {
      this.carElectricCharger = scene.add.image(posX, posY, textureKey)
      this.carElectricCharger.setOrigin(0.4, 0.5)
    },
    addPhaserControls(scene) {
      let propsByKeyboardEventCodes
      if (this.useDefaultMovement) {
        propsByKeyboardEventCodes = {
          [this.keyboardEventCodes.arrowUp]: {
            deltaRowIndex: -1,
            deltaColumnIndex: 0,
            carDirection: this.carDirections.north
          },
          [this.keyboardEventCodes.arrowDown]: {
            deltaRowIndex: 1,
            deltaColumnIndex: 0,
            carDirection: this.carDirections.south
          },
          [this.keyboardEventCodes.arrowLeft]: {
            deltaRowIndex: 0,
            deltaColumnIndex: -1,
            carDirection: this.carDirections.west
          },
          [this.keyboardEventCodes.arrowRight]: {
            deltaRowIndex: 0,
            deltaColumnIndex: 1,
            carDirection: this.carDirections.east
          }
        }
      } else {
        propsByKeyboardEventCodes = {
          [this.keyboardEventCodes.arrowUp]: {
          },
          [this.keyboardEventCodes.arrowDown]: {
          },
          [this.keyboardEventCodes.arrowLeft]: {
            carDirection: this.carDirections.west
          },
          [this.keyboardEventCodes.arrowRight]: {
            carDirection: this.carDirections.east
          }
        }
      }

      scene.input.keyboard.on('keydown', (event) => {
        if (this.isMoving) { return }
        const propsByKeyboardEventCode = propsByKeyboardEventCodes[event.code]
        if (propsByKeyboardEventCode) {
          const { deltaRowIndex, deltaColumnIndex, carDirection } = propsByKeyboardEventCode
          this.movePhaserCar(deltaRowIndex, deltaColumnIndex, event.code, carDirection)
        }
      })
    },
    addPhaserText(scene, posX, posY, text, textStyle) {
      // Añadir el texto en el centro del elemento
      scene.add.text(posX, posY, text, textStyle).setOrigin(0.5)
    },
    changeCarSprite(direction) {
      const newSpriteSheet = `img/phaserjs/top-down-vehicles/${this.carName}/` +
        `${this.carColor}/MOVE/${direction}/${this.carColor}_${this.carName}` +
        `_CLEAN_${direction}_000-sheet.PNG`
      this.car.anims.stop()
      this.car.setTexture(newSpriteSheet)
      this.car.play(`car_animation_${direction}`)
      this.$set(this.currentTile, 'spriteDirection', direction)
    },
    checkMove(fromRowIndex, fromColumnIndex, toRowIndex, toColumnIndex, direction) {
      // Salir del método si las coordenadas están fuera de los límites de la matriz
      if (
        fromRowIndex < 0 ||
        fromColumnIndex < 0 ||
        fromRowIndex >= this.board.length ||
        fromColumnIndex >= this.board[0].length ||
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

      return {
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
    customPhaserCarMove(deltaRowIndex = 0, deltaColumnIndex = 0, keyDirection, carDirection) {
      carDirection = carDirection ?? this.currentTile.spriteDirection
      const scene = this.config.scene[0]
      let currentRow = this.currentTile.y
      let currentCol = this.currentTile.x

      // Si se presiona la flecha hacia abajo, no hacer nada
      if (keyDirection === this.keyboardEventCodes.arrowDown) {
        return
      }

      // Si se presiona la flecha hacia arriba, mover el coche en la dirección del sprite actual
      if (keyDirection === this.keyboardEventCodes.arrowUp) {
        const directionKeyMap = {
          'NORTH': this.keyboardEventCodes.arrowUp,
          'SOUTH': this.keyboardEventCodes.arrowDown,
          'EAST': this.keyboardEventCodes.arrowRight,
          'WEST': this.keyboardEventCodes.arrowLeft
        }
        switch (this.currentTile.spriteDirection) {
          case this.carDirections.north:
            deltaRowIndex = -1
            deltaColumnIndex = 0
            break
          case this.carDirections.south:
            deltaRowIndex = 1
            deltaColumnIndex = 0
            break
          case this.carDirections.east:
            deltaRowIndex = 0
            deltaColumnIndex = 1
            break
          case this.carDirections.west:
            deltaRowIndex = 0
            deltaColumnIndex = -1
            break
          default:
            console.error(`Unknown sprite direction: ${this.currentTile.spriteDirection}`)
            deltaRowIndex = 0
            deltaColumnIndex = 0
        }

        // Se mueve en la dirección especificada hasta que ya no sea posible
        while (this.checkMove(
            currentRow,
            currentCol,
            currentRow + deltaRowIndex,
            currentCol + deltaColumnIndex,
            // Obten la tecla correspondiente a la dirección de la animación,
            // para comprobar si puede moverse en dicha dirección
            directionKeyMap[carDirection]
        )) {
          currentRow += deltaRowIndex
          currentCol += deltaColumnIndex
        }
      } else {
        this.turnPhaserCar(keyDirection, carDirection)
      }

      const moveDuration = 500 * Math.max(
        Math.abs(currentCol - this.currentTile.x),
        Math.abs(currentRow - this.currentTile.y)
      )

      const targetY = currentRow * this.tileSize + this.tileSize / 2
      const targetX = currentCol * this.tileSize + this.tileSize / 2

      this.currentTile.y = currentRow
      this.currentTile.x = currentCol
      this.isMoving = true

      if (this.moveTween) {
        this.moveTween.stop()
      }

      this.moveTween = scene.tweens.add({
        targets: this.car,
        y: targetY,
        x: targetX,
        duration: moveDuration,
        ease: 'Linear',
        onComplete: () => {
          this.isMoving = false
          this.moveTween = null
        }
      })
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

        this.changeCarSprite(carDirection)
      }
    },
    drawPhaserLine(scene, startX, startY, endX, endY, lineWidth, textureKey = this.textureKeys.minecraftDeepFloor) {
      const deltaX = endX - startX
      const deltaY = endY - startY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const angle = Math.atan2(deltaY, deltaX)
      const line = scene.add.tileSprite(
        (startX + endX) / 2,
        (startY + endY) / 2,
        distance,
        lineWidth,
        textureKey
      )

      line.setOrigin(0.5, 0.5)
      line.rotation = angle
    },
    drawPhaserSquare(scene, posX, posY, squareSize, textureKey = this.textureKeys.minecraftDeepFloor) {
      const square = scene.add.tileSprite(posX, posY, squareSize, squareSize, textureKey)
      square.setDepth(-1) // Asegurarse de que el sprite esté detrás de otros elementos
    },
    initPhaserGame() {
      const gameScene = new Phaser.Scene('GameScene')

      gameScene.preload = () => {
        // Preload de la textura
        gameScene.load.image(this.textureKeys.carElectricCharger, 'img/phaserjs/car-stations/100x100/car-electric-charger.png')
        gameScene.load.image(this.textureKeys.minecraftDeepFloor, 'img/phaserjs/textures/100x100/minecraft-deep-floor.jpg')
        gameScene.load.image(this.textureKeys.sceneBackground, 'img/phaserjs/backgrounds/main.jpg')

        Object.values(this.carDirections).forEach((direction) => {
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
        const totalFrames = 12
        const frameRate = 12

        Object.values(this.carDirections).forEach((direction) => {
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

        this.addBackgroundImage(gameScene)
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
    movePhaserCar(deltaRowIndex, deltaColumnIndex, keyboardDirection, carDirection) {
      if (this.useDefaultMovement) {
        this.defaultPhaserCarMove(deltaRowIndex, deltaColumnIndex, keyboardDirection, carDirection)
      } else {
        this.customPhaserCarMove(deltaRowIndex, deltaColumnIndex, keyboardDirection, carDirection)
      }
    },
    turnPhaserCar(keyDirection) {
      const currentIndex = Object.values(this.carDirections).indexOf(this.currentTile.spriteDirection)
      let nextIndex
      if (keyDirection === this.keyboardEventCodes.arrowRight) {
        nextIndex = currentIndex + 1
        if (nextIndex === Object.keys(this.carDirections).length) {
          nextIndex = 0
        }
      } else if (keyDirection === this.keyboardEventCodes.arrowLeft) {
        nextIndex = currentIndex - 1
        if (nextIndex === -1) {
          nextIndex = Object.keys(this.carDirections).length - 1
        }
      }
      const nextDirection = Object.keys(this.carDirections)[nextIndex]
      this.changeCarSprite(this.carDirections[nextDirection])
    }
  }
}
</script>
