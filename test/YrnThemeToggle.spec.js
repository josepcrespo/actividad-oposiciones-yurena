import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import YrnThemeToggle from '@/components/YrnThemeToggle.vue'

// Global Vuetify setup
Vue.use(Vuetify)

// Global `localVue` object
const localVue
  = createLocalVue()
localVue.use(Vuetify)

describe('YrnThemeToggle', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should mount without errors', () => {
    const wrapper
      = shallowMount(YrnThemeToggle, {
        localVue,
        vuetify,
        mocks: {
          $t: jest.fn((text) => {
            return text
          }),
          $vuetify: {
            theme: {
              dark: false
            }
          }
        }
      })
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('should toggle between light and dark themes when clicked', () => {
    const wrapper
      = mount(YrnThemeToggle, {
        localVue,
        vuetify,
        mocks: {
          $t: jest.fn((text) => {
            return text
          }),
          $vuetify: {
            theme: {
              dark: false
            }
          }
        }
      })

    const button
      = wrapper.find('.yrn-theme-toggle')

    // Initial theme is light
    expect(wrapper.vm.$vuetify.theme.dark).toBe(false)

    // Click the button
    button.trigger('click')

    // Theme should be dark
    expect(wrapper.vm.$vuetify.theme.dark).toBe(true)

    // Click the button again
    button.trigger('click')

    // Theme should be light again
    expect(wrapper.vm.$vuetify.theme.dark).toBe(false)
  })
})
