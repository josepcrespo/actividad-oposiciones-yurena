// https://github.com/robinvdvleuten/vuex-persistedstate/#example-with-nuxtjs
import createPersistedState from 'vuex-persistedstate'

/**
 * The default function is a higher-order function that takes in an object
 * with a 'store' property and returns a function that persists the state
 * of the Vuex store using the vuex-persistedstate library.
 *
 * @param {Object} options - An object containing the 'store' property.
 * @param {Object} options.store - The Vuex store object.
 * @returns {Function} - A function that persists the state of the Vuex store.
 */
export default ({ store }) => {
  createPersistedState({
    key: 'app.vuex.state',
    paths: [
      'index',
      'learningUnit',
      'timeTracker'
    ]
  })(store)
}
