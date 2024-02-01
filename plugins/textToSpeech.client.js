export default ({ app }, inject) => {
  inject('textToSpeech', (text) => {
    if (typeof text !== 'string') return null

    function getMessageVoice(locale) {
      return new Promise(resolve => {
        const checkVoices = () => {
          const voicesArray = window.speechSynthesis.getVoices()
          const matchingVoice = voicesArray.find(voice => {
            return voice.lang?.startsWith(locale)
          })

          if (matchingVoice) {
            resolve(matchingVoice)
          } else {
            setTimeout(checkVoices, 100)
          }
        }

        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = checkVoices
        } else {
          checkVoices()
        }
      })
    }

    if ('speechSynthesis' in window) {
      const message = new SpeechSynthesisUtterance()
      message.lang = app.i18n?.locale
      message.pitch = 1
      message.rate = 0.6
      message.text = text
      message.volume = 1

      getMessageVoice(app.i18n?.locale).then(voice => {
        if (voice) {
          message.voice = voice
          window.speechSynthesis.speak(message)
        } else {
          alert('Sorry, there is no available voice for your language.')
        }
      })
    } else {
      alert('Sorry, your browser doesn\'t support text to speech!')
    }
  })
}
