import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import YrnTopMenuTitle from '@/components/YrnTopMenuTitle.vue'

// Global Vuetify setup
Vue.use(Vuetify)
const localVue
  = createLocalVue()
localVue.use(Vuetify)

// The component renders correctly with a title and subtitle.
test('should render with title and subtitle', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              title: {
                en: 'Title',
                es: 'Título'
              },
              subtitle: {
                en: 'Subtitle',
                es: 'Subtítulo'
              }
            }
          },
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            },
            es: {
              activity: 'Actividad',
              challenge: 'Desafío'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the title and subtitle are rendered correctly
  expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('Title')
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('Subtitle')
})

// The title is displayed correctly in the toolbar title component.
test('should display title in toolbar title component', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              title: {
                en: 'Title',
                es: 'Título'
              }
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the title is displayed correctly in the toolbar title component
  expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('Title')
})

// The subtitle is displayed correctly in the div element.
test('should display subtitle in div element', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              subtitle: {
                en: 'Subtitle',
                es: 'Subtítulo'
              }
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the subtitle is displayed correctly in the div element
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('Subtitle')
})

// The subtitle is capitalized correctly when both activityId and challengeId are present.
test('should capitalize subtitle when both activityId and challengeId are present', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          activityId: '1',
          challengeId: '2'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the subtitle is capitalized correctly
  expect(wrapper.vm.$capitalizeWords).toHaveBeenCalledWith('Activity 1 / Challenge 2')
})

// The subtitle is displayed correctly when only activityId or challengeId is present.
test('should display subtitle when only activityId or challengeId is present', () => {
  const vuetify = new Vuetify()

  // Initialize the component with only activityId present
  const wrapper1 = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          activityId: '1'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the subtitle is displayed correctly with only activityId present
  expect(wrapper1.find('.yrn-top-menu-title__subtitle').text()).toBe('')

  // Initialize the component with only challengeId present
  const wrapper2 = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          challengeId: '2'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the subtitle is displayed correctly with only challengeId present
  expect(wrapper2.find('.yrn-top-menu-title__subtitle').text()).toBe('')
})

// The subtitle is displayed correctly when neither activityId nor challengeId is present.
test('should display subtitle when neither activityId nor challengeId is present', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              subtitle: {
                en: 'Subtitle',
                es: 'Subtítulo'
              }
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the subtitle is displayed correctly when neither activityId nor challengeId is present
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('Subtitle')
})

// The component renders correctly when the title is missing.
test('should render correctly when the title is missing', () => {
  // Initialize the component without title
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {}
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the component renders correctly without title
  expect(wrapper.find('.yrn-top-menu-title__title').exists()).toBe(true)
})

// The component renders correctly when the subtitle is missing.
test('should render correctly when the subtitle is missing', () => {
  // Initialize the component without subtitle
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              title: {
                en: 'Title',
                es: 'Título'
              }
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the component renders correctly without subtitle
  expect(wrapper.find('.yrn-top-menu-title__subtitle').exists()).toBe(true)
})

// The component renders correctly when the activityTranslation is missing.
test('should render correctly when the activityTranslation is missing', () => {
  // Initialize the component without activityTranslation
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              challenge: 'Challenge'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          activityId: '1',
          challengeId: '2'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the component renders correctly without activityTranslation
  expect(wrapper.vm.$capitalizeWords).toHaveBeenCalledWith(' 1 / Challenge 2')
})

// The component renders correctly when the challengeTranslation is missing.
test('should render correctly when the challengeTranslation is missing', () => {
  // Initialize the component without challengeTranslation
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              activity: 'Activity'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          activityId: '1',
          challengeId: '2'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the component renders correctly without challengeTranslation
  expect(wrapper.vm.$capitalizeWords).toHaveBeenCalledWith('Activity 1 /  2')
})

// The component renders correctly when the activityId is missing.
test('should render correctly when the activityId is missing', () => {
  // Initialize the component without activityId
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          challengeId: '2'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the title and subtitle are rendered correctly
  expect(wrapper.find('.yrn-top-menu-title__title').exists()).toBe(true)
  expect(wrapper.find('.yrn-top-menu-title__subtitle').exists()).toBe(true)
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('')
})

// The component renders correctly when the challengeId is missing.
test('should render correctly when the challengeId is missing', () => {
  // Initialize the component without challengeId
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          activityId: '1'
        }
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the component renders correctly without challengeId
  expect(wrapper.find('.yrn-top-menu-title__title').exists()).toBe(true)
  expect(wrapper.find('.yrn-top-menu-title__subtitle').exists()).toBe(true)
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('')
})

// The component updates the title and subtitle when the store state changes.
test('should render with updated title and subtitle', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              title: {
                en: 'Title',
                es: 'Título'
              },
              subtitle: {
                en: 'Subtitle',
                es: 'Subtítulo'
              }
            }
          },
          routeParams: {
            en: {
              activity: 'Activity',
              challenge: 'Challenge'
            },
            es: {
              activity: 'Actividad',
              challenge: 'Desafío'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {}
      },
      $capitalizeWords: jest.fn()
    }
  })

  // Assert that the initial title and subtitle are rendered correctly
  expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('Title')
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('Subtitle')

  // Update the store state
  wrapper.vm.$store.state.learningUnit.indexPage.title.en = 'New Title'
  wrapper.vm.$store.state.learningUnit.indexPage.subtitle.en = 'New Subtitle'

  wrapper.vm.$nextTick(() => {
    // Assert that the updated title and subtitle are rendered correctly
    expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('New Title')
    expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('New Subtitle')
  })
})

// The component capitalizes words correctly in different locales.
test('should render with activityId and challengeId in subtitle', () => {
  // Initialize the component
  const vuetify = new Vuetify()
  const wrapper = shallowMount(YrnTopMenuTitle, {
    localVue,
    vuetify,
    mocks: {
      $store: {
        state: {
          learningUnit: {
            indexPage: {
              title: {
                en: 'title',
                es: 'título'
              },
              subtitle: {
                en: 'subtitle',
                es: 'subtítulo'
              }
            }
          },
          routeParams: {
            en: {
              activity: 'activity',
              challenge: 'challenge'
            },
            es: {
              activity: 'actividad',
              challenge: 'desafío'
            }
          }
        }
      },
      $i18n: {
        locale: 'en'
      },
      $route: {
        params: {
          activityId: '1',
          challengeId: '2'
        }
      },
      $capitalizeWords: jest.fn((text) => text.toUpperCase())
    }
  })

  // Assert that the title and subtitle with activityId and challengeId are rendered correctly
  expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('title')
  expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('ACTIVITY 1 / CHALLENGE 2')
})

// The component applies ellipsis correctly in different locales.
describe('YrnTopMenuTitle', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should render with title and subtitle', () => {
    // Initialize the component
    const wrapper = shallowMount(YrnTopMenuTitle, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          state: {
            learningUnit: {
              indexPage: {
                title: {
                  en: 'Title',
                  es: 'Título'
                },
                subtitle: {
                  en: 'Subtitle',
                  es: 'Subtítulo'
                }
              }
            },
            routeParams: {
              en: {
                activity: 'Activity',
                challenge: 'Challenge'
              },
              es: {
                activity: 'Actividad',
                challenge: 'Desafío'
              }
            }
          }
        },
        $i18n: {
          locale: 'es'
        },
        $route: {
          params: {}
        },
        $capitalizeWords: jest.fn()
      }
    })

    // Assert that the title and subtitle are rendered correctly
    expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('Título')
    expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('Subtítulo')
  })
})

// The component handles long titles and subtitles correctly.
describe('YrnTopMenuTitle', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should render with long title and subtitle', () => {
    // Initialize the component
    const wrapper = shallowMount(YrnTopMenuTitle, {
      localVue,
      vuetify,
      mocks: {
        $store: {
          state: {
            learningUnit: {
              indexPage: {
                title: {
                  en: 'This is a very long title that should be truncated',
                  es: 'Este es un título muy largo que debería ser truncado'
                },
                subtitle: {
                  en: 'This is a very long subtitle that should be truncated',
                  es: 'Este es un subtítulo muy largo que debería ser truncado'
                }
              }
            },
            routeParams: {
              en: {
                activity: 'Activity',
                challenge: 'Challenge'
              },
              es: {
                activity: 'Actividad',
                challenge: 'Desafío'
              }
            }
          }
        },
        $i18n: {
          locale: 'en'
        },
        $route: {
          params: {}
        },
        $capitalizeWords: jest.fn()
      }
    })

    // Assert that the title and subtitle are rendered correctly
    expect(wrapper.find('.yrn-top-menu-title__title').text()).toBe('This is a very long title that should be truncated')
    expect(wrapper.find('.yrn-top-menu-title__subtitle').text()).toBe('This is a very long subtitle that should be truncated')
  })
})
