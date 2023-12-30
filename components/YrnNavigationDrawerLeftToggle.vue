<i18n lang="yaml">
ar:
  buttonTitle: "القائمة"
  buttonTooltip: "عرض القائمة الرئيسية"
ca:
  buttonTitle: "Menú"
  buttonTooltip: "Mostra el menú principal"
de:
  buttonTitle: "Menü"
  buttonTooltip: "Zeige das Hauptmenü"
en:
  buttonTitle: "Menu"
  buttonTooltip: "Show the main menu"
es:
  buttonTitle: "Menú"
  buttonTooltip: "Muestra el menú principal"
fr:
  buttonTitle: "Menu"
  buttonTooltip: "Afficher le menu principal"
it:
  buttonTitle: "Menu"
  buttonTooltip: "Mostra il menu principale"
ja:
  buttonTitle: "メニュー"
  buttonTooltip: "メインメニューを表示する"
pt:
  buttonTitle: "Menu"
  buttonTooltip: "Mostrar o menu principal"
ro:
  buttonTitle: "Meniu"
  buttonTooltip: "Afișează meniul principal"
ru:
  buttonTitle: "Меню"
  buttonTooltip: "Показать главное меню"
zh:
  buttonTitle: "菜单"
  buttonTooltip: "显示主菜单"
</i18n>

<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-app-bar-nav-icon
        v-bind="attrs"
        v-on="on"
        @click.stop="toggleNavigationDrawerLeft()"
      />
    </template>
    <span>{{ $t('buttonTooltip') }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'YrnNavigationDrawerLeftToggle',
  methods: {
    toggleNavigationDrawerLeft() {
      this.$store?.commit(
        'setNavigationDrawerLeft',
        !this.$store?.state?.navigationDrawerLeft
      )
    }
  }
}
</script>
