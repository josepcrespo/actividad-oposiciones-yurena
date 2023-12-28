import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import YrnImageSimple from '@/components/YrnImageSimple.vue'

// Global Vuetify setup
Vue.use(Vuetify)
const localVue
  = createLocalVue()
localVue.use(Vuetify)

describe('YrnImageSimple', () => {
  const rootClass = 'yrn-image-simple'
  const propsData = {
    alt: {
      en: 'Alternative text for the image',
      es: 'Texto alternativo para la imagen'
    },
    src: '/path/to/image.png'
  }
  const mocks = { $i18n: { locale: 'es' } }

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance and renders correctly.', () => {
    const wrapper = mount(YrnImageSimple, {
      localVue,
      vuetify,
      propsData,
      mocks
    })

    expect(wrapper.vm).toBeTruthy()
  })

  test('It has the component\'s unique root class.', () => {
    const wrapper = mount(YrnImageSimple, {
      localVue,
      vuetify,
      propsData,
      mocks
    })

    expect(wrapper.classes(rootClass)).toBe(true)
  })

  test('computed property `localizedAlt` returns the correct value.', () => {
    const wrapper = mount(YrnImageSimple, {
      localVue,
      vuetify,
      propsData,
      mocks
    })
    const alt = {
      en: 'Alternative text 1',
      es: 'Texto alternativo 1'
    }

    // Mock the computed property
    wrapper.setData({ alt })

    expect(wrapper.vm.localizedAlt).toEqual(alt.es)
  })
})
