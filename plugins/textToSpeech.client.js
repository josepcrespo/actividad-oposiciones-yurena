// Cross browser text to speech (TTS)
// https://github.com/tom-s/speak-tts
import Speech from 'speak-tts'

export default ({ app }, inject) => {  
  const speech = new Speech()

  /**
   * Returns the voice object that matches the current language locale.
   * 
   * @param {Array} voices  - An array of voice objects.
   * @returns {Object}      - The voice object that matches the current language locale, or undefined if not found.
   */
  function getCurrentLanguageVoice(voices) {
    voices = voices ?? []
    const localeLookup = {
      'en': 'en-GB',
      'es': 'es-ES'
    }
    const locale = localeLookup[app.i18n.locale] || app.i18n.locale

    return voices.find(voice => {
      return voice.lang?.startsWith(locale)
    })
  }

  /**
   * Converts text to speech using the speak-tts library.
   * 
   * @param {string} text             - The text to be converted to speech.
   * @param {boolean} [debug=false]   - Whether to enable debug mode.
   * @returns {void}
   */
  inject('textToSpeech', (text, debug = false) => {
    if (typeof text !== 'string') return null

    if (speech.hasBrowserSupport()) {
      if (speech.speaking()) {
        speech.cancel()
      }
      speech.init({
        lang: app.i18n.locale,
        listeners: {
          onvoiceschanged: (voices) => {
            if (debug) {
              // eslint-disable-next-line no-console
              console.debug('Event voiceschanged', voices)
              const currentLanguageVoice = getCurrentLanguageVoice(voices)
              if (currentLanguageVoice) {
                speech.setVoice(currentLanguageVoice.name)
              } else {
                window?.alert('Sorry, the current page language don\'t support text to speech on this web browser.')
              }
            }
          }
        },
        pitch: 1,
        queue: false,
        rate: 0.6,
        splitSentences: true,
        volume: 1
      }).then((data) => {
        if (getCurrentLanguageVoice(data.voices)) {
          speech.speak({
            listeners: {
              onstart: () => {
                if (debug) {
                  // eslint-disable-next-line no-console
                  console.debug('Speech started')
                }
              },
              onend: () => {
                if (debug) {
                  // eslint-disable-next-line no-console
                  console.debug('Speech finished')
                }
                speech.cancel()
              },
              onresume: () => {
                if (debug) {
                  // eslint-disable-next-line no-console
                  console.debug('Speech resumed')
                }
              },
              onboundary: (event) => {
                if (debug) {
                  // eslint-disable-next-line no-console
                  console.debug(`${event.name} boundary reached after ${event.elapsedTime} milliseconds`)
                }
              }
            },
            text
          }).then(() => {
            if (debug) {
              // eslint-disable-next-line no-console
              console.debug('Success reading text aloud!')
            }
          }).catch(e => {
            // eslint-disable-next-line no-console
            console.error('Error on speech.speak() %o', e)
          })
        }
      }).catch(e => {
        // eslint-disable-next-line no-console
        console.error('Error on speech.init() %o', e)
      })
    } else {
      window?.alert('Sorry, your browser doesn\'t support text to speech!')
    }
  })
}
