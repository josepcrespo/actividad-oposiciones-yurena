import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import YrnPageLoadingOverlay from '@/components/YrnPageLoadingOverlay.vue'

// Global Vuetify setup
Vue.use(Vuetify)

// Configuración de Vuex
Vue.use(Vuex)
const localVue = createLocalVue()

describe('YrnPageLoadingOverlay', () => {
  // Propiedades comunes para las pruebas
  const propsData = {}

  // Mock del estado de Vuex para el componente
  const store = new Vuex.Store({
    state: {
      pageLoadingOverlay: true
    }
  })

  test('is a Vue instance', () => {
    const wrapper
      = mount(YrnPageLoadingOverlay, { localVue, store, propsData })

    expect(wrapper.vm).toBeTruthy()
  })

  test('renders overlay with indeterminate progress circular', () => {
    const wrapper
      = mount(YrnPageLoadingOverlay, { localVue, store, propsData })

    // Verifica que el overlay está presente
    expect(wrapper.find('.v-overlay').exists()).toBe(true)
    // Verifica que el círculo de progreso indeterminado está presente
    expect(wrapper.find('.v-progress-circular').exists()).toBe(true)
    // Verifica que el círculo de progreso indeterminado tiene la clase que lo hace visible
    expect(wrapper.find('.v-progress-circular').classes('v-progress-circular--visible')).toBe(true)
  })

  test('does not render overlay when visibilityState is false', () => {
    // Mock del estado de Vuex para el componente
    const store = new Vuex.Store({
      state: {
        pageLoadingOverlay: false
      }
    })

    const wrapper
      = mount(YrnPageLoadingOverlay, { localVue, store, propsData })

    // Verifica que el círculo de progreso indeterminado NO está presente
    expect(wrapper.find('.v-progress-circular').exists()).toBe(false)
  })

  test('computed property `visibilityState` returns the correct value', () => {
    const wrapper
      = mount(YrnPageLoadingOverlay, { localVue, store, propsData })

    // Verifica que la propiedad computada `visibilityState` devuelve el valor correcto
    expect(wrapper.vm.visibilityState).toBe(true)
  })
})
