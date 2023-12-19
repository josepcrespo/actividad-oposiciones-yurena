<i18n lang="yaml">
es:
  activity: "Actividad"
  start: "Inicio"
ca:
  activity: "Activitat"
  start: "Inici"
</i18n>

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
        to="/"
        router
        exact
      >
        <v-list-item-action class="mr-4">
          <v-icon>
            mdi-apps
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t('start') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="(activityId, index) in activityIds"
        :key="index"
        :to="`/activity/${activityId}/challenge/1`"
        router
        exact
      >
        <v-list-item-action class="mr-4">
          <v-icon>
            mdi-chart-bubble
          </v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t('activity') }} {{ activityId }}
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
    },
    activityIds() {
      return this.$store.getters['learningUnit/getActivityIds']
    }
  }
}
</script>
