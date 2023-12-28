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
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is a Vue instance', () => {
    const wrapper = mount(YrnAlertText, {
      localVue,
      vuetify,
      propsData: {
        paragraphs: {
          en: [
            'English paragraph 1',
            'English paragraph 2'
          ],
          es: [
            'Párrafo en español 1',
            'Párrafo en español 2'
          ]
        }
      },
      mocks: {
        $i18n: {
          locale: 'es'
        },
      }
    })

    // Renders correctly
    expect(wrapper.vm).toBeTruthy()
    // It has the main component class
    expect(wrapper.classes('yrn-alert-text')).toBe(true)
  })
})
