<i18n lang="yaml">
es:
  rightDrawerButtonTitle: "Progreso"
  rightDrawerButtonTooltip: "Muestra el progreso en la situación de aprendizaje"
ca:
  rightDrawerButtonTitle: "Progrés"
  rightDrawerButtonTooltip: "Mostra el progrés en la situació d'aprenentatge"
</i18n>

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
      <v-toolbar-title class="pl-1">
        {{ topMenuTitle }}
      </v-toolbar-title>
      <div class="ml-4 text-h6 font-weight-light d-none d-md-block">
        {{ topMenuSubtitle }}
      </div>
      <v-spacer />
      <yrn-theme-toggle />
      <yrn-language-switcher />
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            class="ml-1"
            :icon="$vuetify.breakpoint.xs"
            text
            v-bind="attrs"
            v-on="on"
            @click.stop="toggleRightDrawer()"
          >
            <v-icon>
              mdi-format-list-bulleted
            </v-icon>
            <span class="ml-2 d-none d-sm-block">
              {{ $t('rightDrawerButtonTitle') }}
            </span>
          </v-btn>
        </template>
        <span>{{ $t('rightDrawerButtonTooltip') }}</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <yrn-navigation-drawer-progress />
    <yrn-page-loading-overlay />
    <yrn-snackbar-notification />
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
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
      miniVariant: false
    }
  },
  computed: {
    topMenuTitle() {
      return this.$store?.state?.learningUnit?.indexPage?.title?.[this.$i18n.locale]
    },
    topMenuSubtitle() {
      return this.$store?.state?.learningUnit?.indexPage?.subtitle?.[this.$i18n.locale]
    }
  },
  methods: {
    toggleRightDrawer() {
      // rightDrawer = !rightDrawer
      this.$store.commit('setRightDrawer', !this.$store.state.rightDrawer)
      // console.log(this.$store)
    }
  }
}
</script>

<style lang="scss">
.v-main {
  background-attachment: fixed;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: 100%;

  &__wrap {
    backdrop-filter: blur(8px) !important;
  }
}
</style>