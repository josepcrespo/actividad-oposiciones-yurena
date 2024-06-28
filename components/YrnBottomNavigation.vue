<i18n lang="yaml">
  ar:
    achievements: "الإنجازات"
    language: "اللغة"
    progress: "التقدم"
    theme: "المظهر"
  ca:
    achievements: "Assoliments"
    language: "Idioma"
    progress: "Progrés"
    theme: "Apariència"
  de:
    achievements: "Erfolge"
    language: "Sprache"
    progress: "Fortschritt"
    theme: "Erscheinungsbild"
  es:
    achievements: "Logros"
    language: "Idioma"
    progress: "Progreso"
    theme: "Apariencia"
  eu:
    achievements: "Lortuak"
    language: "Hizkuntza"
    progress: "Aurrerapena"
    theme: "Itxura"
  fr:
    achievements: "Réalisations"
    language: "Langue"
    progress: "Progrès"
    theme: "Apparence"
  gl:
    achievements: "Logros"
    language: "Lingua"
    progress: "Progreso"
    theme: "Apariencia"
  it:
    achievements: "Realizzazioni"
    language: "Lingua"
    progress: "Progresso"
    theme: "Aspetto"
  ja:
    achievements: "実績"
    language: "言語"
    progress: "進捗"
    theme: "外観"
  pt:
    achievements: "Conquistas"
    language: "Idioma"
    progress: "Progresso"
    theme: "Aparência"
  ro:
    achievements: "Realizări"
    language: "Limbă"
    progress: "Progres"
    theme: "Aspect"
  ru:
    achievements: "Достижения"
    language: "Язык"
    progress: "Прогресс"
    theme: "Внешний вид"
  zh:
    achievements: "成就"
    language: "语言"
    progress: "进度"
    theme: "外观"
</i18n>

<template>
  <v-bottom-navigation
    v-model="vBottomNavigation.value"
    :app="vBottomNavigation.app"
    class="yrn-bottom-navigation"
    :grow="vBottomNavigation.grow"
    @change="onVBottomNavigationChange"
  >
    <v-btn
      v-for="(button, index) in vBottomNavigation.buttons"
      :key="index"
      :value="button.value"
    >
      <span>{{ $t(button.value) }}</span>
      <template v-if="button.value !== 'theme'">
        <v-icon>{{ button.icon }}</v-icon>
      </template>
      <template v-else>
          <v-icon v-if="$vuetify.theme.dark">
            {{ button.iconDark }}
          </v-icon>
          <v-icon v-else>
            {{ button.iconLight }}
          </v-icon>
      </template>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'YrnBottomNavigation',
  data() {
    return {
      vBottomNavigation: {
        app: true,
        buttons: [{
          icon: 'mdi-translate',
          value: 'language'
        }, {
          iconDark: 'mdi-lightbulb-off-outline',
          iconLight: 'mdi-lightbulb-on-outline',
          value: 'theme'
        }, {
          icon: 'mdi-star-face',
          value: 'achievements'
        }, {
          icon: 'mdi-format-list-bulleted',
          value: 'progress'
        }],
        grow: true,
        value: undefined
      }
    }
  },
  methods: {
    toggleAchievementsDialog() {
      this.$store?.commit('setAchievementsDialog', true)
    },
    toggleLanguageSwitcherDialog() {
      this.$store?.commit('setLanguageSwitcherDialog', true)
    },
    toggleNavigationDrawerRight() {
      this.$store?.commit(
        'setNavigationDrawerRight',
        !this.$store?.state?.navigationDrawerRight
      )
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    onVBottomNavigationChange(btnValue) {
      switch (btnValue) {
        case 'language':
          this.toggleLanguageSwitcherDialog()
          break
        case 'theme':
          this.toggleTheme()
          break
        case 'achievements':
          this.toggleAchievementsDialog()
          break
        case 'progress':
          this.toggleNavigationDrawerRight()
          break
        default:
          break
      }
      this.$nextTick(() => {
        this.vBottomNavigation.value = undefined
      })
    }
  }
}
</script>
