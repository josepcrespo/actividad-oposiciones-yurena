export default ({ app, store }) => {
  // let startTime = store.getters['timeTracker/getTotalTime']
  let startTime = 0
  let intervalId = null

  const updateStartTime = () => {
    startTime = Date.now()
  }

  const trackTimeSpent = () => {
    const endTime = Date.now()
    const timeSpent = endTime - startTime
    store.commit('timeTracker/addTimeEntry', {
      page: app.router.currentRoute.fullPath,
      timeSpent
    })
    updateStartTime()
  }

  const startInterval = () => {
    if (intervalId) return
    intervalId = setInterval(() => {
      const currentTotalTime = store.getters['timeTracker/getTotalTime']
      store.commit('timeTracker/updateTotalTime', currentTotalTime + 1000)
    }, 1000)
  }

  const stopInterval = () => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  app.router.beforeEach((to, from, next) => {
    trackTimeSpent()
    next()
  })

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackTimeSpent()
      stopInterval()
    } else {
      updateStartTime()
      startInterval()
    }
  })

  window.addEventListener('beforeunload', trackTimeSpent)

  startInterval()
}
