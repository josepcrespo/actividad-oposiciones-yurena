<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="true" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Contenidos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    <v-overlay
      absolute
      :value="$store.state['loading-overlay'].show"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </v-overlay>
    <v-snackbar
      v-model="$store.state.snackbar.model"
      :color="$store.state.snackbar.color"
      :timeout="$store.state.snackbar.timeout"
      :app="$store.state.snackbar.app"
      :top="$store.state.snackbar.top"
      :right="$store.state.snackbar.right"
    >
      {{ $store.state.snackbar.text.toShow }}
      <template #action="{ attrs }">
        <v-btn
          color="default"
          v-bind="attrs"
          :style="{ display: ($store.state.snackbar.showAction ? 'flex' : 'none') }"
          @click="optRetry()"
        >
          Reintentar
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: true,
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
      miniVariant: false,
      rightDrawer: false,
      title: 'Flora + Fauna = Álgebra',
    }
  },
}
</script>

<style lang="scss">
.v-main {
  background-attachment: fixed;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: 100%;

  &__wrap {
    backdrop-filter: blur(5px) !important;
  }
}
</style>