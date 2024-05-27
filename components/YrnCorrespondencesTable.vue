<i18n lang="yaml">
  ar:
    equationSolution: "حل المعادلة"
    secretChar: "حرف"
    correspondencesTable: "جدول المراسلات"
    search: "بحث"
  ca:
    equationSolution: "Solució de l'equació"
    secretChar: "Lletra"
    correspondencesTable: "Taula de correspondències"
    search: "Cerca"
  de:
    equationSolution: "Lösungen der Gleichung"
    secretChar: "Buchstabe"
    correspondencesTable: "Entsprechungstabelle"
    search: "Suche"
  en:
    equationSolution: "Equation Solution"
    secretChar: "Letter"
    correspondencesTable: "Correspondences Table"
    search: "Search"
  es:
    equationSolution: "Solución de ecuación"
    secretChar: "Letra"
    correspondencesTable: "Tabla de correspondencias"
    search: "Búsqueda"
  eu:
    equationSolution: "Ekuazioaren soluzioa"
    secretChar: "Letra"
    correspondencesTable: "Korespondentzia-taula"
    search: "Bilaketa"
  fr:
    equationSolution: "Solution de l'équation"
    secretChar: "Lettre"
    correspondencesTable: "Tableau des correspondances"
    search: "Recherche"
  gl:
    equationSolution: "Solución da ecuación"
    secretChar: "Letra"
    correspondencesTable: "Táboa de correspondencias"
    search: "Busca"
  it:
    equationSolution: "Soluzione dell'equazione"
    secretChar: "Lettera"
    correspondencesTable: "Tabella delle corrispondenze"
    search: "Ricerca"
  ja:
    equationSolution: "方程式の解"
    secretChar: "文字"
    correspondencesTable: "対応表"
    search: "検索"
  pt:
    equationSolution: "Solução da equação"
    secretChar: "Letra"
    correspondencesTable: "Tabela de correspondências"
    search: "Pesquisa"
  ro:
    equationSolution: "Soluția ecuației"
    secretChar: "Literă"
    correspondencesTable: "Tabel de corespondențe"
    search: "Căutare"
  ru:
    equationSolution: "Решение уравнения"
    secretChar: "Буква"
    correspondencesTable: "Таблица соответствий"
    search: "Поиск"
  zh:
    equationSolution: "方程解"
    secretChar: "字母"
    correspondencesTable: "对应表"
    search: "搜索"
</i18n>

<template>
  <v-row class="yrn-correspondences-table">
    <v-col>
      <v-card>
        <v-card-title>
          {{ $t('correspondencesTable') }}
          <v-spacer />
          <v-text-field
            v-model="tableSearchTerm"
            append-icon="mdi-magnify"
            :label="$t('search')"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="tableHeaders"
          :items="tableItems"
          :items-per-page="5"
          :search="tableSearchTerm"
          class="elevation-2"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'YrnCorrespondencesTable',
  props: {
    tableItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tableSearchTerm: '',
      tableHeaders: [
        { text: this.$t('equationSolution'), value: 'equationSolution' },
        { text: this.$t('secretChar'), value: 'secretChar' },
      ]
    }
  },
}
</script>
