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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>
          mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
        </v-icon>
      </v-btn> -->
      <v-toolbar-title>
        {{ topMenu.title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>
          mdi-format-list-bulleted
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      temporary
      fixed
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              mdi-format-list-bulleted
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            Contenidos
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
    <yrn-page-loading-overlay />
    <yrn-snackbar-notification />
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
      topMenu: {
        title: ''
      }
    }
  },
  mounted() {
    this.$set(
      this.topMenu,
      'title',
      // TODO: add support for different languages
      this.$store?.state?.learningUnit?.indexPage?.title?.es
    )
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