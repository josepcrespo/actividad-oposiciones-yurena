<template>
  <div ref="videoContainer" class="yrn-youtube-video">
    <iframe
      ref="youtubeIframe"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      frameborder="0"
      :src="youtubeEmbedUrl"
      :title="title"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: 'YouTube video player',
      required: false,
      type: String
    },
    youtubeVideoId: {
      required: true,
      type: String
    },
    aspectRatio: {
      default: '16:9',
      required: false,
      type: String
    }
  },
  computed: {
    /**
     * Return the embed URL for a YouTube video using the youtubeVideoId property.
     *
     * @return {string} The embed URL for the YouTube video.
     */
    youtubeEmbedUrl() {
      return `https://www.youtube-nocookie.com/embed/${this.youtubeVideoId}`
    }
  },
  mounted() {
    this.resizeVideo()
    window.addEventListener('resize', this.resizeVideo)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeVideo)
  },
  methods: {
    /**
     * Resize the video container to maintain the aspect ratio of the video,
     * depending on the window size.
     */
    resizeVideo() {
      const [aspectWidth, aspectHeight] = this.aspectRatio.split(':').map(Number)
      const aspectRatio = aspectWidth / aspectHeight
      const videoContainer = this.$refs.videoContainer
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      let width, height

      if (windowWidth / windowHeight > aspectRatio) {
        // Ajustar el ancho del contenedor y calcular la altura en consecuencia
        width = windowHeight * aspectRatio
        height = windowHeight
      } else {
        // Ajustar la altura del contenedor y calcular el ancho en consecuencia
        width = windowWidth
        height = windowWidth / aspectRatio
      }

      // Establecer las dimensiones del contenedor del vídeo
      videoContainer.style.width = `${width}px`
      videoContainer.style.height = `${height}px`

      // Establecer las dimensiones del iframe del vídeo
      const youtubeIframe = this.$refs.youtubeIframe
      youtubeIframe.width = width
      youtubeIframe.height = height
    }
  }
}
</script>

<style scoped>
.yrn-youtube-video {
  position: relative;
  width: 100%;
}
</style>
