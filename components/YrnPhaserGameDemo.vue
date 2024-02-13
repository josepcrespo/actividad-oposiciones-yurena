<template>
  <v-row class="yrn-phaser-game">
    <v-col>
    <div id="phaserContainer" />
    </v-col>
  </v-row>
</template>

<script>
import * as Phaser from 'phaser'

class DemoScene extends Phaser.Scene {
  /**
   * Preload images and set base URL.
   */
  preload() {
    this.load.setBaseURL('https://labs.phaser.io')
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }

  /**
   * Creates and initializes the game objects and their behaviors.
   */
  create() {
    this.add.image(400, 300, 'sky')

    const particles = this.add.particles(0, 0, 'red', {
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })

    const logo = this.physics.add.image(400, 100, 'logo')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    particles.startFollow(logo)
  }
}

export default {
  name: 'YrnPhaserGameDemo',
  data() {
    return {
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
      game: null
    }
  },
  mounted() {
    this.initPhaserGame()
  },
  methods: {
    initPhaserGame() {
      this.config.scene = [
        ...this.config.scene,
        DemoScene
      ]

      // Creamos la instancia del juego
      try {
        this.game = new Phaser.Game(this.config)
      } catch (error) {
        console.error('Failed to initialize the Phaser game: %o', error)
      }
    }
  }
}
</script>
