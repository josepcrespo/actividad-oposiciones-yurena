import Speech from 'speak-tts'

export default ({ app }, inject) => {
  inject('textToSpeech', (text, debug) => {
    if (typeof text !== 'string') return null

    function getCurrentLanguageVoice(voices) {
      voices = voices ?? []
      let locale
      switch (app.i18n.locale) {
        case 'en':
          locale = 'en-GB'
          break
        case 'es':
          locale = 'es-ES'
          break
        default:
          // All other languages don't have different locales,
          // so the language code is enough
          locale = app.i18n.locale
      }

      return voices.find(voice => {
        return voice.lang?.startsWith(locale)
      })
    }

    debug = debug || false
    const speech = new Speech()

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
