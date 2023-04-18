import React from 'react'
import ReactDOM from 'react-dom'

import App from './page-container'

class PageWidget {
  instance = null

  initPage2(options) {
    const rootNode = document.getElementById('page2')!
    if (!rootNode) {
      throw new Error('no container dom to render view')
    }
    ReactDOM.unmountComponentAtNode(rootNode)
    ReactDOM.render(React.createElement(App, options), rootNode as HTMLElement)
  }

  destroy() {
    const rootNode = document.getElementById('page2')
    ReactDOM.unmountComponentAtNode(rootNode as HTMLElement)
  }
}

function app(window) {
  const sdk = new PageWidget()
  window.PAGE2 = window.KFIN_TOUCH || {}

  window.PAGE2.init = sdk.initPage2
  const queue = window.PAGE2.q
  if (Array.isArray(queue)) {
    for (let i = 0; i < queue.length; i++) {
      let event = queue[i]

      if (event && event.type === 'initPage2') {
        window.PAGE2.init(event.payload)
      }
    }
    window.PAGE2.q = []
  }
}

app(window)

export default app
