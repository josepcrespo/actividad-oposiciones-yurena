<i18n lang="yaml">
es:
  drawerTitle: "Progreso"
ca:
  drawerTitle: "Progrés"
</i18n>

<template>
  <v-navigation-drawer
    v-model="drawerVisibility"
    class="yrn-navigation-drawer-right"
    fixed
    :right="true"
    temporary
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
  name: 'YrnNavigationDrawerRight',
  computed: {
    drawerVisibility: {
      get() {
        return this.$store?.state?.navigationDrawerRight
      },
      set(value) {
        this.$store.commit('setNavigationDrawerRight', value)
      }
    }
  }
}
</script>
