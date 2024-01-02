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
    <v-btn value="language">
      <span>{{ $t('language')}}</span>
      <v-icon>mdi-translate</v-icon>
    </v-btn>
    <v-btn value="theme">
      <span>{{ $t('theme') }}</span>
      <v-icon v-if="$vuetify.theme.dark">
        mdi-lightbulb-off-outline
      </v-icon>
      <v-icon v-else>
        mdi-lightbulb-on-outline
      </v-icon>
    </v-btn>
    <v-btn value="achievements">
      <span>{{ $t('achievements') }}</span>
      <v-icon>mdi-star-face</v-icon>
    </v-btn>
    <v-btn value="progress">
      <span>{{ $t('progress') }}</span>
      <v-icon>mdi-format-list-bulleted</v-icon>
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
        grow: true,
        value: undefined
      }
    }
  },
  methods: {
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
          break
        case 'theme':
          this.toggleTheme()
          break
        case 'achievements':
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
