<template>  
  <v-navigation-drawer
    v-model="drawerVisibility"
    class="yrn-navigation-drawer-left"
    :clipped="clipped"
    :fixed="fixed"
    :mini-variant="miniVariant"
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action class="mr-4">
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'YrnNavigationDrawerLeft',
  data() {
    return {
      clipped: true,
      fixed: false,
      menuItems: [
        {
          icon: 'mdi-apps',
          title: 'Inicio',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Actividad 1',
          to: '/actividad-1',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Actividad 2',
          to: '/actividad-2',
        },
      ],
      miniVariant: false
    }
  },
  computed: {
    drawerVisibility: {
      get() {
        return this.$store?.state?.navigationDrawerLeft
      },
      set(value) {
        this.$store.commit('setNavigationDrawerLeft', value)
      }
    }
  }
}
</script>
