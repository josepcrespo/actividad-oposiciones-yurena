// https://v2.nuxt.com/docs/directory-structure/plugins/#the-plugins-property
export default ({ app }, inject) => {
  /* Here we inject the method 'func1' */
  inject('capitalizeWords', (string) => {
    if (!string) return ''
    return string.replace(/\b\w/g, function (match) {
      return match.toUpperCase()
    })
  })
}