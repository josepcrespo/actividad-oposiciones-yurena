// https://v2.nuxt.com/docs/directory-structure/plugins/#the-plugins-property
export default ({ app }, inject) => {
  /* Here we inject the global method '$capitalizeWords' */
  inject('capitalizeWords', (string) => {
    if (typeof string !== 'string') return ''
    return string.replace(/\b\w/g, match => match.toUpperCase())
  })

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
}