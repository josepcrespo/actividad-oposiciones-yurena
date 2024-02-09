<i18n lang="yaml">
ar:
  checkPairsBtn: "فحص الأزواج"
  resetBtn: "إعادة تشغيل"
  title: "العثور على الأزواج"
  showHelpBtn: "إظهار المساعدة"
ca:
  checkPairsBtn: "Comprova les parelles"
  resetBtn: "Reiniciar"
  title: "Troba les parelles"
  showHelpBtn: "Mostra ajuda"
de:
  checkPairsBtn: "Paare überprüfen"
  resetBtn: "Neustart"
  title: "Finde die Paare"
  showHelpBtn: "Hilfe anzeigen"
en:
  checkPairsBtn: "Check Pairs"
  resetBtn: "Restart"
  title: "Find the pairs"
  showHelpBtn: "Show Help"
es:
  checkPairsBtn: "Comprobar parejas"
  resetBtn: "Reiniciar"
  showHelpBtn: "Mostrar ayuda"
  title: "Encuentra las parejas"
eu:
  checkPairsBtn: "Bikoteak egiaztatu"
  resetBtn: "Berrabiarazi"
  title: "Aurkitu bikoteak"
  showHelpBtn: "Laguntza erakutsi"
fr:
  checkPairsBtn: "Vérifier les paires"
  resetBtn: "Réinitialiser"
  title: "Trouver les paires"
  showHelpBtn: "Afficher l'aide"
gl:
  checkPairsBtn: "Comprobar parellas"
  resetBtn: "Reiniciar"
  title: "Atopa as parellas"
  showHelpBtn: "Amosar axuda"
it:
  checkPairsBtn: "Verifica le coppie"
  resetBtn: "Ricomincia"
  title: "Trova le coppie"
  showHelpBtn: "Mostra aiuto"
ja:
  checkPairsBtn: "ペアを確認"
  resetBtn: "再起動"
  title: "ペアを見つける"
  showHelpBtn: "ヘルプを表示"
pt:
  checkPairsBtn: "Verificar pares"
  resetBtn: "Reiniciar"
  title: "Encontrar os pares"
  showHelpBtn: "Mostrar ajuda"
ro:
  checkPairsBtn: "Verificare perechi"
  resetBtn: "Restart"
  title: "Găsește perechile"
  showHelpBtn: "Afișează ajutor"
ru:
  checkPairsBtn: "Проверить пары"
  resetBtn: "Перезапустить"
  title: "Найдите пары"
  showHelpBtn: "Показать справку"
zh:
  checkPairsBtn: "检查配对"
  resetBtn: "重新开始"
  title: "找出配对"
  showHelpBtn: "显示帮助"
</i18n>

<template>
  <!-- https://vuejs.org/guide/built-ins/transition#named-transitions -->
  <!-- https://www.w3schools.com/vue/ref_transition.php -->
  <transition name="vue-transition-fade">
    <v-row
      v-if="exerciseSections.length === exerciseSectionsWellSolved.length"
      class="yrn-custom-drag-and-drop rounded-lg mt-4 mx-0"
    >
      <v-col class="yrn-custom-drag-and-drop__title-and-settings d-flex align-center">
        <h2>
          {{ $t('title') }}
        </h2>
      </v-col>
      <v-col class="d-flex align-center justify-end">
        <v-switch
          v-model="switchHelpModel"
          class="mr-5"
          inset
          :label="$t('showHelpBtn')"
        />
        <v-btn
          class="mr-2"
          :color="(allPairsAreTwins === undefined)
            ? 'default'
            : allPairsAreTwins
              ? 'green'
              : 'deep-orange darken-4'"
          elevation="0"
          outlined
          small
          @click="checkTwinsPairs()"
        >
          {{ $t('checkPairsBtn') }}
          <v-icon
            v-show="allPairsAreTwins"
            right
          >
            mdi-check-circle
          </v-icon>
          <v-icon
            v-show="allPairsAreTwins === false"
            right
          >
            mdi-alert-circle-outline
          </v-icon>
        </v-btn>
        <v-btn
          elevation="0"
          outlined
          small
          @click="resetDropItemAreas()"
        >
          {{ $t('resetBtn') }}
        </v-btn>
      </v-col>
      <v-col
        class="px-3 py-0"
        cols="12"
      >
        <v-divider class="mb-4" />
      </v-col>
      <v-col
        class="px-16 py-4 text-center"
        cols="12"
      >
        {{ exerciseSolutionStatement }}
      </v-col>
      <!-- Lista de términos -->
      <v-col
        class="yrn-custom-drag-and-drop__draggable-items-container d-flex flex-wrap justify-center"
        cols="12"
      >
        <yrn-draggable-item
          v-for="item in idsWithUuid(items)"
          :key="item.id"
          class="yrn-custom-drag-and-drop__draggable-item"
          :item="item"
          visible-property="name"
        />
      </v-col>
      <!-- Area donde soltar términos e imagenes -->
      <v-col
        class="yrn-custom-drag-and-drop__drop-items-areas-container d-flex flex-wrap justify-center"
        cols="12"
      >
        <yrn-drop-items-area
          v-for="(item, index) in idsWithUuid(items)"
          ref="dropAreas"
          :key="item.id"
          class="yrn-custom-drag-and-drop__drop-items-area"
          :activity-id="activityId"
          :challenge-id="challengeId"
          :exercise-id="exerciseId"
          :index="index"
          :max-image-items="1"
          :max-other-items="1"
          :show-pair-validation="switchHelpModel"
        />
      </v-col>
      <!-- Lista de imágenes -->
      <v-col
        class="yrn-custom-drag-and-drop__draggable-items-container d-flex flex-wrap justify-center"
        cols="12"
      >
        <yrn-draggable-item
          v-for="item in idsWithUuid(items)"
          :key="item.id"
          class="yrn-custom-drag-and-drop__draggable-item d-inline-flex"
          :item="item"
          visible-property="image"
        />
      </v-col>
    </v-row>
  </transition>
</template>

<script>
import { v4 as newUuid } from 'uuid'

export default {
  name: 'YrnCustomDragAndDropSolution',
  props: {
    activityId: {
      required: true,
      type: [Number, String]
    },
    challengeId: {
      required: true,
      type: [Number, String]
    },
    exerciseId: {
      required: true,
      type: [Number, String]
    }
  },
  data() {
    return {
      allPairsAreTwins: undefined,
      items: [],
      switchHelpModel: true
    }
  },
  computed: {
    exercise() {
      return this.$store?.getters['learningUnit/getExercise'](
        this.activityId,
        this.challengeId,
        this.exerciseId
      )
    },
    exerciseSolutionStatement() {
      return this.exercise?.solution?.statement?.[this.$i18n.locale]
    },
    exerciseSections() {
      return this.exercise?.sections ?? []
    },
    exerciseSectionsWellSolved() {
      return this.getExerciseSectionsWellSolved(
        this.activityId,
        this.challengeId,
        this.exerciseId
      )
    },
  },
  mounted() {
    this.items = this.$shuffleArray(
      this.$store?.getters['learningUnit/getExercise'](
        this.activityId,
        this.challengeId,
        this.exerciseId
      )?.solution?.items ?? []
    )
  },
  methods: {
    checkTwinsPairs() {
      this.allPairsAreTwins = this.$refs?.dropAreas?.every(dropArea => {
        return dropArea.hasTwinsPair === true
      })
    },
    getExerciseSectionsWellSolved(activityId, challengeId, exerciseId) {
      return this.$store?.getters['learningUnit/getExerciseSectionsWellSolved'](
        activityId,
        challengeId,
        exerciseId
      )
    },
    idsWithUuid(originalArray) {
      const transformedArray = originalArray.map(item => {
        const newId = `${item.id}--${newUuid()}`

        return {
          ...item,
          id: newId
        }
      })

      return transformedArray
    },
    resetDropItemAreas() {
      this.allPairsAreTwins = undefined
      this.items = this.$shuffleArray(this.items)
      this.$refs?.dropAreas?.forEach(dropArea => {
        if (dropArea && typeof dropArea.reset === 'function') {
          dropArea.reset()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-transition-fade-enter-active {
  opacity: 0;
  translate: 0 -100px;
}

.vue-transition-fade-enter-to {
  opacity: 1;
  translate: 0 0;
}

.vue-transition-fade-leave-active {
  opacity: 1;
  translate: 0 0;
}

.vue-transition-fade-leave-to {
  opacity: 0;
  translate: 0 -100px;
}

.yrn-custom-drag-and-drop {
  transition: all 0.5s ease-in-out;
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--dark {
  .yrn-custom-drag-and-drop {
    background: rgba(0 0 0 / 50%);
  }
}

/* stylelint-disable-next-line selector-class-pattern */
.theme--light {
  .yrn-custom-drag-and-drop {
    background: rgba(255 255 255 / 50%);
  }
}
</style>
