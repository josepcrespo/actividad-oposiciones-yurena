<i18n lang="yaml">
es:
  activity: "Actividad"
  start: "Inicio"
ca:
  activity: "Activitat"
  start: "Inici"
en:
  activity: "Activity"
  start: "Start"
de:
  activity: "Aktivität"
  start: "Start"
ru:
  activity: "Активность"
  start: "Начать"
fr:
  activity: "Activité"
  start: "Démarrer"
it:
  activity: "Attività"
  start: "Inizia"
eu:
  activity: "Ekintza"
  start: "Hasieratu"
gl:
  activity: "Actividade"
  start: "Inicio"
pt:
  activity: "Atividade"
  start: "Início"
ar:
  activity: ":النشاط"
  start: "ابدأ"
zh:
  activity: "活动"
  start: "开始"
ro:
  activity: "Activitate"
  start: "Începe"
ja:
  activity: "アクティビティ"
  start: "開始"
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
        :to="getStartUrl"
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
        :to="getListItemUrl(activityId)"
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
    activityIds() {
      return this.$store.getters['learningUnit/getActivityIds']
    },
    drawerVisibility: {
      get() {
        return this.$store?.state?.navigationDrawerLeft
      },
      set(value) {
        this.$store.commit('setNavigationDrawerLeft', value)
      }
    },
    getStartUrl() {
      return this.$store?.getters?.getLocaleUrl(this.$i18n, '/')
    }
  },
  methods: {
    getListItemUrl(activityId) {
      return this.$store?.getters?.getLocaleActivityChallengeUrl(
        this.$i18n,
        activityId,
        1
      )
    }
  }
}
</script>
