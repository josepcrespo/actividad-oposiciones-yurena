import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import YrnImage from '@/components/YrnImage.vue'
import YrnImageSimple from '@/components/YrnImageSimple.vue'

// Global Vuetify setup
Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)

// Globally Register YrnImageSimple component
localVue.component('YrnImageSimple', YrnImageSimple)

describe('YrnImage', () => {
  const rootClass = 'yrn-image'

  // Propiedades comunes para las pruebas
  const propsData = {
    imageAlt: {
      en: 'Alternative text for the image',
      es: 'Texto alternativo para la imagen',
    },
    imageSrc: '/path/to/image.png',
    linkTitle: {
      en: 'Link title',
      es: 'Título del enlace',
    },
    linkUrl: 'https://example.com',
  }

  // Mocks comunes para las pruebas
  const mocks = { $i18n: { locale: 'es' } }

  test('is a Vue instance', () => {
    const wrapper
      = mount(YrnImage, { localVue, propsData, mocks })
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders correctly with unique root class', () => {
    const wrapper
      = mount(YrnImage, { localVue, propsData, mocks })
    expect(wrapper.classes(rootClass)).toBe(true)
  })

  test('contains YrnImageSimple component', () => {
    const wrapper
      = mount(YrnImage, { localVue, propsData, mocks })
    const yrnImageSimple
      = wrapper.findComponent(YrnImageSimple)
    expect(yrnImageSimple.exists()).toBe(true)
  })

  test('YrnImageSimple receives correct props', () => {
    const wrapper
      = mount(YrnImage, { localVue, propsData, mocks })
    const yrnImageSimple = wrapper.findComponent(YrnImageSimple)
    expect(yrnImageSimple.props('alt')).toEqual(propsData.imageAlt)
    expect(yrnImageSimple.props('src')).toBe(propsData.imageSrc)
  })

  test('renders anchor link with correct attributes', () => {
    const wrapper
      = mount(YrnImage, { localVue, propsData, mocks })
    const anchorLink
      = wrapper.find('.yrn-image__anchor-link')
    expect(anchorLink.attributes('href')).toBe(propsData.linkUrl)
    expect(anchorLink.attributes('target')).toBe('_blank')
    expect(anchorLink.attributes('title')).toBe(propsData.linkTitle.es)
  })

  test('computed property `localizedLinkTitle` returns the correct value', () => {
    const wrapper = mount(YrnImage, { localVue, propsData, mocks })
    expect(wrapper.vm.localizedLinkTitle).toBe(propsData.linkTitle.es)
  })
})
