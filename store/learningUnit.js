import { set } from 'vue'

export const state = () => ({
  backgroundImage: '/img/background.png',
  indexPage: {
    author: 'Yurena Cabrera Hernández',
    image: {
      imageSrc: '/img/index/profe-yure.png',
      imageAlt: {
        es: 'Memoji de Yurena.',
        ca: 'Memoji de Yurena.'
      }
    },
    password: {
      statement: {
        es: 'Para empezar, introduce el código secreto que te proporcionará tu profesor:',
        ca: 'Per començar, introdueix el codi secret que et proporcionarà el teu professor:'
      },
      expected: '141592',
      fromUser: ''
    },
    subtitle: {
      es: 'Flora + Fauna = Álgebra',
      ca: 'Flora + Fauna = Àlgebra'
    },
    title: {
      es: 'Situación de aprendizaje',
      ca: 'Situació d\'aprenentatge'
    }
  },
  languages: [{
    code: 'es',
    flagCode: 'es',
    name: {
      es: 'Español',
      ca: 'Castellà'
    }
  }, {
    code: 'ca',
    flagCode: 'es-ca',
    name: {
      es: 'Catalán',
      ca: 'Català'
    }
  }],
  activities: [{
    activityId: 1,
    challenges: [{
      challengeId: 1,
      pageStructure: [{
        type: 'yrn-page-title',
        title: {
          es: '¿Qué Parque Nacional visitó el director?',
          ca: 'Quin Parc Nacional va visitar el director?'
        }
      }, {
        type: 'yrn-image',
        imageSrc: '/img/actividad-1/reto-1/imagen-de-cabecera.png',
        imageAlt: {
          es: 'Memoji del director del IES El Galeón, mostrando un mapa de las Islas Canarias con los Parques Nacionales.',
          ca: 'Memoji del director de l\'IES El Galeón, mostrant un mapa de les Illes Canàries amb els Parcs Nacionals.'
        },
        linkUrl: 'https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/files/formidable/ENP-Canarias.pdf'
      }, {
        type: 'yrn-alert-text',
        paragraphs: {
          es: [
            'Durante el fin de semana, nuestro director ha visitado uno de los Parques Nacionales de nuestras islas.',
            '¿Serán capaces de averiguar cuál?'
          ],
          ca: [
            'Durant el cap de setmana, el nostre director ha visitat un dels Parcs Nacionals de les nostres illes.',
            'Seran capaços d\'esbrinar quin?'
          ]
        }
      }, {
        type: 'yrn-exercise',
        class: 'yrn-math-problem',
        exerciseId: 1
      }, {
        type: 'yrn-exercise-solution-otp',
        exerciseId: 1
      }],
      exercises: [{
        exerciseId: 1,
        solution: {
          statement: {
            es: 'Escriban aquí la clave secreta usando las soluciones de las ecuaciones:',
            ca: 'Escriviu ací la clau secreta usant les solucions de les equacions:'
          },
          expected: '1044-271/3222-420-1',
          fromUser: ''
        },
        statement: {
          es: 'Resuelvan las siguientes ecuaciones de primer grado para encontrar la clave secreta que necesitan para descubrir la primera pista:',
          ca: 'Resolgueu les següents equacions de primer grau per trobar la clau secreta que necessiteu per descobrir la primera pista:'
        },
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'b',
          statement: '7 = x + 3',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'c',
          statement: '8x – 5x = x + 8',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'd',
          statement: '3x = 9x + 12',
          solution: {
            expected: -2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'e',
          statement: '3x + 6 = 2x + 13',
          solution: {
            expected: 7,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'f',
          statement: '5x – 7 = 2 – 4x',
          solution: {
            expected: '1/3',
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'g',
          statement: '5x – 8 + 2x = 7 + 4x – 9',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'h',
          statement: '3x + x + 4 = 2x + 30',
          solution: {
            expected: 22,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'i',
          statement: '4x + 7 – x = 5 + 2x',
          solution: {
            expected: -4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'j',
          statement: '4 – 2x + 13 = 10 – 9x + 7',
          solution: {
            expected: 2,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'k',
          statement: '7x – 10 + x – 2 = 6x – 3 + 3x – 1',
          solution: {
            expected: 0,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          activityId: 1,
          challengeId: 1,
          exerciseId: 1,
          sectionId: 'l',
          statement: '5x – 7 + 2x = 3x – 3 + 4x – 5 + x',
          solution: {
            expected: -1,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }, {
      challengeId: 2,
      pageStructure: [{
        type: 'yrn-page-title',
        title: {
          es: 'Viendo la imagen, ¿ya saben qué Parque Nacional visitó el director?',
          ca: 'Veient la imatge, ja saben quin Parc Nacional va visitar el director?'
        }
      }, {
        type: 'yrn-image',
        imageSrc: '/img/actividad-1/reto-1/imagen-de-cabecera.png',
        imageAlt: {
          es: 'Imagen del Parque Natural que visitó el director.',
          ca: 'Imatge del Parc Natural que va visitar el director.'
        }
      }, {
        type: 'yrn-exercise-solution-otp',
        exerciseId: 1
      }, {
        type: 'yrn-exercise',
        class: 'yrn-math-problem',
        exerciseId: 2
      }, {
        type: 'yrn-exercise-solution-fill-gaps',
        exerciseId: 2
      }],
      exercises: [{
        exerciseId: 1,
        solution: {
          statement: {
            es: 'Escriban aquí la respuesta:',
            ca: 'Escriviu ací la resposta:'
          },
          expected: 'El Teide',
          fromUser: ''
        }
      }, {
        exerciseId: 2,
        statement: {
          es: 'Nuestro director es malísimo para recordar números pero le encantan las ecuaciones.',
          ca: 'Resolgueu les següents equacions de primer grau per trobar la clau secreta que necessiteu per descobrir la primera pista:'
        },
        details: {
          es: 'Resuelvan las siguientes ecuaciones de primer grado para decubrir los datos más relevantes del Parque Natural que visitó.',
          ca: 'Resolgueu les següents equacions de primer grau per descobrir les dades més rellevants del Parc Natural que va visitar.'
        },
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'a',
          statement: 'x + 2 = 3',
          solution: {
            expected: 1,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'b',
          statement: '27 = 3x',
          solution: {
            expected: 9,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'c',
          statement: '6x − 3 = 4x + 7',
          solution: {
            expected: 5,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'd',
          statement: '2x + 9 = 3x + 5',
          solution: {
            expected: 4,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'e',
          statement: '7 − 2x + 5 − 3x = −3',
          solution: {
            expected: 3,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'f',
          statement: '4x + 7 = 35',
          solution: {
            expected: 7,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }, {
          sectionId: 'g',
          statement: '-3 − x = −2x + 5',
          solution: {
            expected: 8,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }]
  }, {
    activityId: 2,
    challenges: [{
      challengeId: 1,
      exercises: [{
        exerciseId: 1,
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }]
  }, {
    activityId: 3,
    challenges: [{
      challengeId: 1,
      exercises: [{
        exerciseId: 1,
        sections: [{
          sectionId: 'a',
          statement: '2x + 1 = 21',
          solution: {
            expected: 10,
            fromUser: undefined,
            fromUserBySteps: undefined
          }
        }]
      }]
    }]
  }]
})

export const mutations = {
  addOrUpdateSection(state, payload) {
    const activityIndex = state.activities?.findIndex(activity => activity.activityId === payload.activityId)

    if (activityIndex !== -1) {
      const challengeIndex = state.activities[activityIndex].challenges?.findIndex(challenge => challenge.challengeId === payload.challengeId)

      if (challengeIndex !== -1) {
        const exerciseIndex = state.activities[activityIndex].challenges[challengeIndex].exercises?.findIndex(exercise => exercise.exerciseId === payload.exerciseId)

        if (exerciseIndex !== -1) {
          const sectionIndex = state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections?.findIndex(section => section.sectionId === payload.section.sectionId)

          if (sectionIndex !== -1) {
            // Update section
            set(
              state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections,
              sectionIndex,
              payload.section
            )
          } else {
            // Add section
            state.activities[activityIndex].challenges[challengeIndex].exercises[exerciseIndex].sections.push(payload.section)
          }
        }
      }
    }
  },
  setPasswordFromUser(state, payload) {
    if (state.indexPage?.password) {
      set(state.indexPage.password, 'fromUser', payload)
    }
  }
}

export const getters = {
  getActivityIds(state) {
    const activityIds = []

    state.activities.forEach(activity => {
      activityIds.push(activity.activityId)
    })

    return activityIds
  },
  getExercise: (state) => (activityId, challengeId, exerciseId) => {
    const activityObject = state.activities?.find(activity => activity.activityId === activityId)

    if (activityObject) {
      const challengeObject = activityObject.challenges?.find(challenge => challenge.challengeId === challengeId)

      if (challengeObject) {
        const exerciseObject = challengeObject.exercises?.find(exercise => exercise.exerciseId === exerciseId)

        if (exerciseObject) {
          return exerciseObject
        }
      }
    } else {
      return {}
    }
  },
  getSectionsWellSolved: (state, getters) => (activityId, challengeId, exerciseId) => {
    const sections = getters.getExercise(activityId, challengeId, exerciseId)?.sections
    if (window?.Array?.isArray(sections)) {
      return sections.filter(section => {
        // eslint-disable-next-line eqeqeq
        return section.solution?.expected == section.solution?.user
      })
    } else {
      return []
    }
  }
}
