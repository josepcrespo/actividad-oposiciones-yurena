import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import YrnAlertText from '@/components/YrnAlertText.vue'

// Global Vuetify setup
Vue.use(Vuetify)
const localVue
  = createLocalVue()
localVue.use(Vuetify)

describe('YrnAlertText', () => {
  const propsData = {
    paragraphs: {
      en: [
        'English paragraph 1',
        'English paragraph 2'
      ],
      es: [
        'Párrafo en español 1',
        'Párrafo en español 2'
      ],
    },
  }
  const mocks = { $i18n: { locale: 'es' } }

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance and renders correctly.', () => {
    const wrapper = mount(YrnAlertText, {
      localVue,
      vuetify,
      propsData,
      mocks
    })

    // Renders correctly
    expect(wrapper.vm).toBeTruthy()
  })

  test('It has the component\'s unique root class.', () => {
    const wrapper = mount(YrnAlertText, {
      localVue,
      vuetify,
      propsData,
      mocks
    })

    expect(wrapper.classes('yrn-alert-text')).toBe(true)
  })

  test('computed property `localizedParagraphs` returns the correct value.', () => {
    const wrapper = mount(YrnAlertText, {
      localVue,
      vuetify,
      propsData,
      mocks
    })
    const paragraphs = {
      es: [
        'Prueba párrafo 1',
        'Prueba párrafo 2'
      ]
    }

    // Mock the computed property
    wrapper.setData({ paragraphs })

    expect(wrapper.vm.localizedParagraphs).toEqual([
      paragraphs.es[0],
      paragraphs.es[1]
    ])
  })
})
