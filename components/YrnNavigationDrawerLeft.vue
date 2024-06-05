<i18n lang="yaml">
  ar:
    activity: "النشاط"
    challenge: "التحدي"
    start: "ابدأ"
  ca:
    activity: "Activitat"
    challenge: "Repte"
    start: "Inici"
  de:
    activity: "Aktivität"
    challenge: "Herausforderung"
    start: "Start"
  en:
    activity: "Activity"
    challenge: "Challenge"
    start: "Start"
  es:
    activity: "Actividad"
    challenge: "Reto"
    start: "Inicio"
  eu:
    activity: "Ekintza"
    challenge: "Erronka"
    start: "Hasieratu"
  fr:
    activity: "Activité"
    challenge: "Défi"
    start: "Démarrer"
  gl:
    activity: "Actividade"
    challenge: "Desafío"
    start: "Inicio"
  it:
    activity: "Attività"
    challenge: "Sfida"
    start: "Inizia"
  ja:
    activity: "アクティビティ"
    challenge: "チャレンジ"
    start: "始める"
  pt:
    activity: "Atividade"
    challenge: "Desafio"
    start: "Início"
  ro:
    activity: "Activitate"
    challenge: "Provocare"
    start: "Începe"
  ru:
    activity: "Активность"
    challenge: "Вызов"
    start: "Начать"
  zh:
    activity: "活动"
    challenge: "挑战"
    start: "开始"
</i18n>

<template>
  <v-navigation-drawer
    v-model="drawerVisibility"
    class="yrn-navigation-drawer-left"
    :clipped="clipped"
    :right="rtlLanguage"
    app
  >
    <v-list>
      <v-list-item
        :to="startUrl"
        router
        exact
      >
        <v-list-item-action class="mr-8">
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
      <v-list-group
        v-for="(activityId, activityIndex) in activityIds"
        :key="activityIndex"
        prepend-icon="mdi-text-box-edit-outline"
        :value="true"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
      >
        <template #activator>
          <v-list-item-title>
            {{ $t('activity') }} {{ activityId }}
          </v-list-item-title>
        </template>
        <v-list-item
          v-for="(challengeId, challengeIndex) in getChallengeIds(activityId)"
          :key="challengeIndex"
          :to="getListItemUrl(activityId, challengeId)"
          router
          exact
        >
          <v-list-item-action class="mr-8">
            <v-icon>
              mdi-circle-small
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('challenge') }} {{ challengeId }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      clipped: true
    }
  },
  computed: {
    activityIds() {
      return this.$store?.getters['learningUnit/getActivityIds']
    },
    drawerVisibility: {
      get() {
        return this.$store?.state?.navigationDrawerLeft
      },
      set(value) {
        this.$store?.commit('setNavigationDrawerLeft', value)
      }
    },
    startUrl() {
      return this.$store?.getters?.getLocaleUrl(this.$i18n, '/')
    },
    rtlLanguage() {
      return this.$store?.state?.rtlLanguage ?? false
    }
  },
  methods: {
    getChallengeIds(activityId) {
      return this.$store?.getters['learningUnit/getChallengeIds'](activityId)
    },
    getListItemUrl(activityId, challengeId = 1) {
      return this.$store?.getters?.getLocaleActivityChallengeUrl(
        this.$i18n,
        activityId,
        challengeId
      )
    }
  }
}
</script>
