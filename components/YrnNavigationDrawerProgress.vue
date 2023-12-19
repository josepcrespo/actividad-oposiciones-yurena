<i18n lang="yaml">
es:
  drawerTitle: "Progreso"
ca:
  drawerTitle: "Progrés"
</i18n>

<template>
  <v-navigation-drawer
    v-model="drawerVisibility"
    :right="true"
    temporary
    fixed
    class="yrn-navigation-drawer-progress"
  >
    <v-list>
      <v-list-item>
        <v-list-item-action class="mr-4">
          <v-icon>
            mdi-format-list-bulleted
          </v-icon>
        </v-list-item-action>
        <v-list-item-title>
          {{ $t('drawerTitle') }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'YrnNavigationDrawerProgress',
  computed: {
    drawerVisibility: {
      get() {
        return this.$store?.state?.rightDrawer
      },
      set(value) {
        this.$store.commit('setRightDrawer', value)
      }
    }
  }
}
</script>
