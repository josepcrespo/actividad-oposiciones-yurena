// https://v2.nuxt.com/docs/directory-structure/plugins/#the-plugins-property
export default ({ app }, inject) => {
  /**
   * Capitalize the first letter of each word in a string.
   * 
   * @param {string} string - The string to capitalize.
   * @returns {string} The capitalized string.
   */
  inject('capitalizeWords', (string) => {
    if (typeof string !== 'string') return ''
    return string.replace(/\b\w/g, match => match.toUpperCase())
  })

  /**
   * Converts an index to a character.
   * 
   * @param {number} index - The index to convert to a character.
   * @param {boolean} [capitalized=false] - Whether to capitalize the character.
   * @returns {string} The character.
   */
  inject('castIndexToCharacter', (index, capitalized = false) => {
    return capitalized
      ? String.fromCharCode(index + 65)
      : String.fromCharCode(index + 97)
  })

  /**
   * Returns a random boolean.
   * 
   * @returns {boolean} The random boolean.
   */
  inject('getRandomBoolean', () => {
    return window?.Math?.random() < 0.5
  })

  /**
   * Returns a random integer between min (inclusive) and max (inclusive).
   * 
   * @param {number} min - The minimum value (inclusive).
   * @param {number} max - The maximum value (inclusive).
   * @returns {number} The random integer.
   */
  inject('getRandomInt', (min, max) => {
    return window?.Math?.floor(window?.Math?.random() * (max - min + 1)) + min
  })

  /**
   * Shuffles an array.
   * 
   * @param {Array} array - The array to shuffle.
   * @returns {Array} The shuffled array.
   */
  inject('shuffleArray', (array) => {
    if (!Array.isArray(array)) {
      throw new TypeError('Invalid argument: array must be an array')
    }
    /**
     * Using the spread operator `[...array]` is more concise and readable than
     * using `array.slice()`. It also has better performance as it creates a
     * shallow copy of the array in a more efficient way.
     */
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = temp
    }
    return newArray
  })

  /**
   * Scrolls to an element with the given selector.
   * 
   * @param {string} selector - The selector of the element to scroll to.
   */
  inject('scrollToElement', (selector) => {
    if (typeof selector !== 'string' || selector.trim() === '') {
      throw new TypeError(
        'Invalid argument: selector must be a non-empty string'
      )
    }
    const element = window?.document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        'Element with selector "%s" not found.',
        selector
      )
    }
  })
}