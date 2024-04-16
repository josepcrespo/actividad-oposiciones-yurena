//#region Translations
<i18n lang="yaml">
  ar:
    defineCarMoves: "يحدد التسلسل الضروري للحركات للوصول إلى محطة الشحن."
    executeSequenceOfMoves: "تشغيل التسلسل"
    resetBtn: "إعادة تعيين"
    resetBtnCar: "إعادة تعيين موضع السيارة الأصلي"
    resetBtnMoves: "مسح التسلسل الحالي للحركات"
  ca:
    defineCarMoves: "Defineix la seqüència de moviments necessaris per arribar a l'estació de càrrega."
    executeSequenceOfMoves: "Executa la seqüència"
    resetBtn: "Reiniciar"
    resetBtnCar: "Restaurar la posició inicial del cotxe"
    resetBtnMoves: "Esborrar la seqüència de moviments actual"
  de:
    defineCarMoves: "Definiert die Sequenz der Bewegungen, die notwendig sind, um die Ladestation zu erreichen."
    executeSequenceOfMoves: "Ablauffolge ausführen"
    resetBtn: "Zurücksetzen"
    resetBtnCar: "Setzt die ursprüngliche Position des Autos zurück"
    resetBtnMoves: "Lösche die aktuelle Bewegungssequenz"
  en:
    defineCarMoves: "Defines the sequence of movements necessary to reach the charging station."
    executeSequenceOfMoves: "Run sequence"
    resetBtn: "Reset"
    resetBtnCar: "Reset car's initial position"
    resetBtnMoves: "Clear current sequence of moves"
  es:
    defineCarMoves: "Define la secuencia de movimientos necesarios para llegar a la estación de carga."
    executeSequenceOfMoves: "Ejecutar secuencia"
    resetBtn: "Reiniciar"
    resetBtnCar: "Restablece la posición inicial del coche"
    resetBtnMoves: "Borrar la secuencia de movimientos actual"
  eu:
    defineCarMoves: "Zeharrekinen sekuentzia definitzen du karga-geltokira iristeko."
    executeSequenceOfMoves: "Exekutatu sekuentzia"
    resetBtn: "Berrezarri"
    resetBtnCar: "Automobilaren lehenengo posizioa berrezarri"
    resetBtnMoves: "Garapen-sekuentzia egungo ezabatu"
  fr:
    defineCarMoves: "Définit la séquence des mouvements nécessaires pour atteindre la station de charge."
    executeSequenceOfMoves: "Exécuter la séquence"
    resetBtn: "Réinitialiser"
    resetBtnCar: "Réinitialiser la position initiale de la voiture"
    resetBtnMoves: "Effacer la séquence de mouvements actuelle"
  it:
    defineCarMoves: "Definisce la sequenza di movimenti necessari per raggiungere la stazione di ricarica."
    executeSequenceOfMoves: "Esegui la sequenza"
    resetBtn: "Reset"
    resetBtnCar: "Ripristina la posizione iniziale dell'auto"
    resetBtnMoves: "Cancella la sequenza di movimenti attuale"
  ja:
    defineCarMoves: "充電ステーションに到達するために必要な動きのシーケンスを定義します。"
    executeSequenceOfMoves: "動きのシーケンスを実行"
    resetBtn: "リセット"
    resetBtnCar: "車の初期位置をリセット"
    resetBtnMoves: "現在の動きのシーケンスを消去"
  pt:
    defineCarMoves: "Define a sequência de movimentos necessários para chegar à estação de carregamento."
    executeSequenceOfMoves: "Executar seqüência"
    resetBtn: "Redefinir"
    resetBtnCar: "Redefinir posição inicial do carro"
    resetBtnMoves: "Limpar sequência atual de movimentos"
  ro:
    defineCarMoves: "Definește secvența de mișcări necesare pentru a ajunge la stația de încărcare."
    executeSequenceOfMoves: "Executa secvența"
    resetBtn: "Resetare"
    resetBtnCar: "Resetați poziția inițială a mașinii"
    resetBtnMoves: "Ștergeți secvența actuală de mișcări"
  ru:
    defineCarMoves: "Определяет последовательность движений, необходимых для достижения зарядной станции."
    executeSequenceOfMoves: "Последовательность запуска"
    resetBtn: "Сброс"
    resetBtnCar: "Сбросить начальное положение машины"
    resetBtnMoves: "Очистить текущую последовательность движений"
  zh:
    defineCarMoves: "定义到达充电站所需的运动序列。"
    executeSequenceOfMoves: "运行顺序"
    resetBtn: "重置"
    resetBtnCar: "重置汽车的初始位置"
    resetBtnMoves: "清除当前移动序列"
</i18n>
//#endregion

//#region Template
<template>
  <v-container class="yrn-phaser-game" fluid>
    <v-row>
      <v-col>
        <h2>
          {{ $t('defineCarMoves') }}
        </h2>
      </v-col>
    </v-row>
    <v-row class="mt-2 overflow-hidden">
      <v-col
        xl="4"
        lg="4"
        md="4"
        sm="12"
        xs="12"
        cols="12"
        class="overflow-y-auto"
        :order="$vuetify.breakpoint.mdAndUp ? 'last' : 'first'"
        :style="`max-height: calc(100vh - ${$vuetify.breakpoint.mdAndUp ? 64 + 8 : 56 + 8}px);`"
      >
        <yrn-drag-and-drop-with-two-lists
          ref="dragAndDropComponent"
          :draggable-items-title="draggableItemsTitle"
          :drop-area-title="dropAreaTitle"
          :items="gameUIButtons"
          visible-property="title"
        >
          <template #bottom>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-menu
                  top
                  close-on-content-click
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      block
                      color="deep-orange"
                      x-large
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ $t('resetBtn') }}
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="resetCarPosition()">
                      <v-list-item-title>
                        {{ $t('resetBtnCar') }}
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="resetMoveSequence()">
                      <v-list-item-title>
                        {{ $t('resetBtnMoves') }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col class="d-flex justify-center">
                <v-btn
                  block
                  color="primary"
                  x-large
                  @click="executeSequenceOfMoves()"
                >
                  <v-icon class="mr-2">
                    mdi-play
                  </v-icon>
                  {{ $t('executeSequenceOfMoves') }}
                </v-btn>
              </v-col>
            </v-row>
          </template>
        </yrn-drag-and-drop-with-two-lists>
      </v-col>
      <v-col
        xl="8"
        lg="8"
        md="8"
        sm="12"
        xs="12"
        cols="12"
      >
        <div id="phaserContainer" />
      </v-col>
    </v-row>
  </v-container>
</template>
//#endregion

//#region Script
<script>
import * as Phaser from 'phaser'

export default {
  name: 'YrnPhaserGame',
  props: {
    customBoard: {
      default: null,
      required: false,
      type: Array
    },
    maxMoves: {
      default: -1,
      required: true,
      type: Number
    },
    numCols: {
      default: 7,
      required: false,
      type: Number
    },
    numRows: {
      default: 5,
      required: false,
      type: Number
    },
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
      carBatteryIndicator: null,
      carColor: 'Red',
      carDirections: {
        north: 'NORTH',
        east: 'EAST',
        south: 'SOUTH',
        west: 'WEST'
      },
      carModel: 'COUPE',
      config: {
        autoRound: false,
        type: Phaser.AUTO,
        width: 862,
        height: 542,
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
      draggableItemsTitle: {
        ar: ':التنقلات المتوفرة',
        ca: 'Moviments disponibles:',
        de: 'Verfügbare Bewegungen:',
        en: 'Available moves:',
        es: 'Movimientos disponibles:',
        eu: 'Jakinarazpenak eskura:',
        fr: 'Déplacements disponibles:',
        gl: 'Movementos dispoñíbeis:',
        it: 'Spostamenti disponibili:',
        ja: '使用可能な移動:',
        pt: 'Movimentos disponíveis:',
        ru: 'Доступные движения:',
        zh: '可用移动：'
      },
      dropAreaTitle: {
        ar: ':التنقلات المطلوبة',
        ca: 'Moviments necessaris:',
        de: 'Benötigte Bewegungen:',
        en: 'Required moves:',
        es: 'Movimientos necesarios:',
        eu: 'Ezabakizunak behar duenak:',
        fr: 'Déplacements nécessaires:',
        gl: 'Movementos necesarios:',
        it: 'Spostamenti necessari:',
        ja: '必要な移動:',
        pt: 'Movimentos necessários:',
        ru: 'Необходимые движения:',
        zh: '所需移动：'
      },
      game: null,
      gameDone: false,
      gameUIButtons: [
        // Populated on the `created` hook
      ],
      isMoving: false,
      keyboardEventCodes: {
        arrowUp: 'ArrowUp',
        arrowDown: 'ArrowDown',
        arrowLeft: 'ArrowLeft',
        arrowRight: 'ArrowRight'
      },
      moveTween: null,
      moveQueue: [],
      movementsUsed: 0,
      offsetX: 30,
      offsetY: 22,
      propsByKeyboardEventCodes: {
        customMoves: {
          // Populated on the `created` hook
        },
        defaultMoves: {
          // Populated on the `created` hook
        }
      },
      textureKeys: {
        carElectricCharger: 'car_electric_charger_texture',
        minecraftDeepFloor: 'minecraft_deep_floor_texture',
        sceneBackground: 'scene_background_texture'
      },
      tileSize: 100
    }
  },
  computed: {
    carReachedLastPosition() {
      // Obtiene las coordenadas del coche en términos de la matriz de caminos
      const carColumn = Math.floor(this.car.x / this.tileSize)
      const carRow = Math.floor(this.car.y / this.tileSize)

      // Verifica si el coche está en la última fila y última columna de la matriz
      return carColumn === this.numCols - 1 && carRow === this.numRows - 1
    }
  },
  created() {
    this.gameUIButtons = [{
      carDirection: this.carDirections.west,
      icon: 'mdi-arrow-left-top',
      keyboardDirection: this.keyboardEventCodes.arrowLeft,
      name: 'customPhaserCarMoveLeft',
      title: {
        ar: "استدر لليسار",
        ca: "Gira a l'esquerra",
        de: "Nach links abbiegen",
        en: "Turn left",
        es: "Girar a la izquierda",
        eu: "Ezkerrera biratu",
        fr: "Tourner à gauche",
        gl: "Xirar á esquerda",
        it: "Gira a sinistra",
        ja: "左に曲がる",
        pt: "Vire à esquerda",
        ro: "Virează la stânga",
        ru: "Повернуть налево",
        zh: "左转"
      }
    }, {
      carDirection: this.carDirections.east,
      icon: 'mdi-arrow-right-top',
      keyboardDirection: this.keyboardEventCodes.arrowRight,
      name: 'customPhaserCarMoveRight',
      title: {
        ar: "استدر لليمين",
        ca: "Gira a la dreta",
        de: "Nach rechts abbiegen",
        en: "Turn right",
        es: "Girar a la derecha",
        eu: "Eskuinera biratu",
        fr: "Tourner à droite",
        gl: "Xirar á dereita",
        it: "Gira a destra",
        ja: "右に曲がる",
        pt: "Vire à direita",
        ro: "Virează la dreapta",
        ru: "Повернуть направо",
        zh: "右转"
      }
    }, {
      carDirection: undefined,
      icon: 'mdi-arrow-up',
      keyboardDirection: this.keyboardEventCodes.arrowUp,
      name: 'customPhaserCarMoveStraight',
      title: {
        ar: "اذهب مباشرة",
        ca: "Avança recte",
        de: "Geradeaus fahren",
        en: "Go straight",
        es: "Avanzar recto",
        eu: "Zuzenean aurrera egin",
        fr: "Aller tout droit",
        gl: "Avanzar recto",
        it: "Vai dritto",
        ja: "まっすぐ進む",
        pt: "Avance reto",
        ro: "Mergi drept înainte",
        ru: "Продолжать прямо",
        zh: "直行"
      }
    }]
    this.propsByKeyboardEventCodes.customMoves = {
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
    this.propsByKeyboardEventCodes.defaultMoves = {
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
    if (Array.isArray(this.customBoard)) {
      this.board = this.customBoard
    } else {
      do {
        this.board = this.createBoard({ numRows: this.numRows, numCols: this.numCols })
      } while(this.checkIfPathExists() === false)
    }
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
    addPhaserBoard(scene, offsetX = this.offsetX, offsetY = this.offsetY) {
      const cellSize = this.tileSize
      const squareSize = cellSize - (((56 * 100) / this.tileSize) * this.tileSize) / 100
      const lastRowIndex = this.board.length - 1
      const lastColumnIndex = this.board[0].length - 1
      const lineWidth = squareSize

      this.board.forEach((row, rowIndex) => {
        row.forEach((element, columnIndex) => {
          const posX = columnIndex * cellSize + cellSize / 2 + offsetX
          const posY = rowIndex * cellSize + cellSize / 2 + offsetY
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
    addPhaserCar(scene, offsetX = this.offsetX, offsetY = this.offsetY) {
      try {
        this.car = scene.add.sprite(
          this.tileSize / 2 + offsetX,
          this.tileSize / 2 + offsetY,
          `car_spritesheet_${this.currentTile.spriteDirection}`
        )
        this.car.setOrigin(0.5)
        this.car.setScale(1.5)
        this.car.play(`car_animation_${this.currentTile.spriteDirection}`)
      } catch (error) {
        console.error('Error adding car to scene: %o', error)
      }
    },
    addPhaserCarBatteryIndicator(scene = this.config.scene[0]) {
      const marginTop = 50
      const marginRight = 30
      const indicatorWidth = 60
      const indicatorHeight = scene.sys.game.canvas.height / 2

      this.carBatteryIndicator = scene.add.graphics()
      this.carBatteryIndicator.fillStyle(0x00ff00)
      this.carBatteryIndicator.fillRect(
        scene.sys.game.canvas.width - indicatorWidth - marginRight,
        marginTop,
        indicatorWidth,
        indicatorHeight
      )
    },
    updatePhaserCarBatteryIndicator(scene = this.config.scene[0]) {
      // Incrementar el contador de partes rojas
      this.movementsUsed++

      const marginTop = 20
      const marginRight = 30
      const indicatorWidth = 60
      const partHeight = scene.sys.game.canvas.height / 2 / this.maxMoves

      // Añadir una parte roja a la barra
      this.carBatteryIndicator.fillStyle(0xff0000)
      this.carBatteryIndicator.fillRect(
        scene.sys.game.canvas.width - indicatorWidth - marginRight,
        marginTop + this.movementsUsed * partHeight,
        indicatorWidth,
        partHeight
      )
      
      if (this.carReachedLastPosition && this.gameDone === false) {
        this.gameDone = true
        this.$store?.dispatch('snackbarNotification/show', {
          i18n: this.$i18n,
          memojiName: 'director-bien',
          success: true
        })
      }
    },
    addPhaserCarStation(
      scene,
      posX,
      posY,
      offsetX = this.offsetX,
      offsetY = this.offsetY,
      textureKey = this.textureKeys.carElectricCharger
    ) {
      this.carElectricCharger = scene.add.image(
        posX + offsetX,
        posY + offsetY,
        textureKey
      )
      this.carElectricCharger.setOrigin(0.7, 0.9)
    },
    addPhaserControls(scene) {
      let propsByKeyboardEventCodes
      if (this.useDefaultMovement) {
        propsByKeyboardEventCodes = this.propsByKeyboardEventCodes.defaultMoves
      } else {
        propsByKeyboardEventCodes = this.propsByKeyboardEventCodes.customMoves
      }

      scene.input.keyboard.on('keydown', (event) => {
        if (this.isMoving) { return }
        const propsByKeyboardEventCode = propsByKeyboardEventCodes[event.code]
        if (propsByKeyboardEventCode) {
          const { deltaColumnIndex, deltaRowIndex, carDirection } = propsByKeyboardEventCode
          this.movePhaserCar(event.code, carDirection, deltaColumnIndex, deltaRowIndex)
        }
      })
    },
    addPhaserText(scene, posX, posY, text, textStyle) {
      // Añadir el texto en el centro del elemento
      scene.add.text(posX, posY, text, textStyle).setOrigin(0.5)
    },
    changeCarSprite(direction) {
      const newSpriteSheet = `/img/phaserjs/top-down-vehicles/${this.carModel}/` +
        `${this.carColor}/MOVE/${direction}/${this.carColor}_${this.carModel}` +
        `_CLEAN_${direction}_000-sheet.png`
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
    customPhaserCarMove(
      deltaRowIndex = 0,
      deltaColumnIndex = 0,
      keyDirection,
      carDirection,
      offsetX = this.offsetX,
      offsetY = this.offsetY
    ) {
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

      const targetY = currentRow * this.tileSize + this.tileSize / 2 + this.offsetY
      const targetX = currentCol * this.tileSize + this.tileSize / 2 + this.offsetX

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
          this.executeNextMove()
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
    executeNextMove() {
      if (this.movementsUsed <= this.maxMoves) {
        if (this.moveQueue.length > 0) {
          const nextMove = this.moveQueue.shift()
          const { carDirection, keyboardDirection } = nextMove

          this.movePhaserCar(keyboardDirection, carDirection)
          if (keyboardDirection === this.keyboardEventCodes.arrowUp) {
            this.updatePhaserCarBatteryIndicator()
          }
        }
      } else {
        this.$store?.dispatch('snackbarNotification/show', {
          i18n: this.$i18n,
          memojiName: 'director-mal',
          success: false,
          defaultTextKey: 'batteryDown'
        })
      }
    },
    executeSequenceOfMoves() {
      const dragAndDropComponent = this.$refs.dragAndDropComponent

      if (dragAndDropComponent && dragAndDropComponent.list2) {
        const customPhaserCarMoves = dragAndDropComponent.list2

        // Agregar cada movimiento a la cola
        this.moveQueue = customPhaserCarMoves.map(move => ({
          carDirection: move.carDirection,
          keyboardDirection: move.keyboardDirection
        }))

        this.executeNextMove()
      } else {
        console.error("Error: No se pudo obtener list2 desde YrnDragAndDropWithTwoLists")
      }
    },
    initPhaserGame() {
      const gameScene = new Phaser.Scene('GameScene')

      gameScene.preload = () => {
        // Preload de la textura
        gameScene.load.image(this.textureKeys.carElectricCharger, '/img/phaserjs/car-stations/100x100/car-electric-charger.png')
        gameScene.load.image(this.textureKeys.minecraftDeepFloor, '/img/phaserjs/textures/100x100/minecraft-deep-floor.jpg')
        gameScene.load.image(this.textureKeys.sceneBackground, '/img/phaserjs/backgrounds/main.jpg')

        Object.values(this.carDirections).forEach((direction) => {
          gameScene.load.spritesheet(
            `car_spritesheet_${direction}`,
            `/img/phaserjs/top-down-vehicles/${this.carModel}/${this.carColor}/` +
            `MOVE/${direction}/${this.carColor}_${this.carModel}` +
            `_CLEAN_${direction}_000-sheet.png`, {
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
        this.addPhaserCarBatteryIndicator(gameScene)
        // Keyboard game controls disabled, by default, the user must define a
        // sequence of movements to finally execute them all one after another.
        // this.addPhaserControls(gameScene)
      }

      this.config.scene.push(gameScene)
      this.game = new Phaser.Game(this.config)
    },
    isDiagonalMove(deltaRowIndex, deltaColumnIndex) {
      // Si el movimiento es diagonal, devuelve true
      return !(Math.abs(deltaRowIndex) + Math.abs(deltaColumnIndex) === 1)
    },
    movePhaserCar(keyboardDirection, carDirection, deltaRowIndex = null, deltaColumnIndex = null) {
      if (this.useDefaultMovement) {
        this.defaultPhaserCarMove(deltaRowIndex, deltaColumnIndex, keyboardDirection, carDirection)
      } else {
        this.customPhaserCarMove(deltaRowIndex, deltaColumnIndex, keyboardDirection, carDirection)
      }
    },
    resetGame() {
      // Restablecer el juego
      this.resetCarPosition()
      this.resetMoveSequence()
      this.gameDone = false
      this.movementsUsed = 0
    },
    resetCarPosition() {
      // Restablecer la posición del coche
      if (this.car) {
        const offsetX = this.offsetX
        const offsetY = this.offsetY
        const posX = this.tileSize / 2 + offsetX
        const posY = this.tileSize / 2 + offsetY

        this.car.setPosition(posX, posY)
        this.changeCarSprite(this.carDirections.south)
        this.currentTile = {
          spriteDirection: 'SOUTH',
          x: 0,
          y: 0 
        }
        this.movementsUsed = 0
        this.addPhaserCarBatteryIndicator()
      }
    },
    resetMoveSequence() {
      // Restablecer la secuencia de movimientos
      this.$refs.dragAndDropComponent.resetList2()
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
//#endregion
