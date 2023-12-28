import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import YrnPageTitle from '@/components/YrnPageTitle.vue'

// Global Vuetify setup
Vue.use(Vuetify)
const localVue
  = createLocalVue()
localVue.use(Vuetify)

describe('YrnPageTitle', () => {
  const rootClass = 'yrn-page-title'
  const propsData = {
    title: {
      en: [
        'English title 1',
        'English title 2'
      ],
      es: [
        'Título en español 1',
        'Título en español 2'
      ]
    }
  }
  const mocks = { $i18n: { locale: 'es' } }

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance and renders correctly.', () => {
    const wrapper = mount(YrnPageTitle, {
      localVue,
      vuetify,
      propsData,
      mocks
    })

    expect(wrapper.vm).toBeTruthy()
  })

  test('It has the component\'s unique root class.', () => {
    const wrapper = mount(YrnPageTitle, {
      localVue,
      vuetify,
      propsData,
      mocks
    })

    expect(wrapper.classes(rootClass)).toBe(true)
  })

  test('computed property `localizedTitle` returns the correct value.', () => {
    const wrapper = mount(YrnPageTitle, {
      localVue,
      vuetify,
      propsData,
      mocks
    })
    const title = {
      en: [
        'Paragraph test 1',
        'Paragraph test 2'
      ],
      es: [
        'Prueba párrafo 1',
        'Prueba párrafo 2'
      ]
    }

    // Mock the computed property
    wrapper.setData({ title })

    expect(wrapper.vm.localizedTitle).toEqual([
      title.es[0],
      title.es[1]
    ])
  })
})
