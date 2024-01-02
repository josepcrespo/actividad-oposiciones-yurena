<template>
  <v-app-bar
    :app="vAppBar.app"
    class="yrn-app-bar"
    :clipped-left="vAppBar.clippedLeft"
    :clipped-right="vAppBar.clippedRight"
    :elevate-on-scroll="vAppBar.elevateOnScroll"
    :fixed="vAppBar.fixed"
  >
    <yrn-navigation-drawer-left-toggle />
    <yrn-top-menu-title />
    <slot name="rightAlignedContent"></slot>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'YrnAppBar',
    data() {
      return {
        vAppBar: {
          app: true,
          clippedLeft: true,
          elevateOnScroll: true,
          fixed: true
        }
      }
    }
  }
</script>