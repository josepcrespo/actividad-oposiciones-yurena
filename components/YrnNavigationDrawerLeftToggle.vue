<template>  
  <v-app-bar-nav-icon @click.stop="toggleNavigationDrawerLeft()" />
</template>

<script>
export default {
  name: 'YrnNavigationDrawerLeftToggle',
  methods: {
    toggleNavigationDrawerLeft() {
      this.$store.commit(
        'setNavigationDrawerLeft',
        !this.$store?.state?.navigationDrawerLeft
      )
    }
  }
}
</script>
