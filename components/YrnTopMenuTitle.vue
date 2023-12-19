<template>
  <div class="yrn-top-menu-title d-flex">
    <v-toolbar-title class="pl-1">
      {{ topMenuTitle }}
    </v-toolbar-title>
    <div class="ml-4 text-h6 font-weight-light d-none d-md-block">
      {{ topMenuSubtitle }}
    </div>
</div>  
</template>

<script>
export default {
  name: 'YrnTopMenuTitle',
  computed: {
    topMenuTitle() {
      return this.$store?.state?.learningUnit?.indexPage?.title?.[this.$i18n.locale]
    },
    topMenuSubtitle() {
      return this.$store?.state?.learningUnit?.indexPage?.subtitle?.[this.$i18n.locale]
    }
  }
}
</script>

<style scoped>
.yrn-top-menu-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>