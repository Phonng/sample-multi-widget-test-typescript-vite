import React from 'react'
import ReactDOM from 'react-dom'

import App from './page-container'

class PageWidget {
  instance = null

  initPage1(options) {
    const rootNode = document.getElementById('page1')!
    if (!rootNode) {
      throw new Error('no container dom to render view')
    }
    ReactDOM.unmountComponentAtNode(rootNode)
    ReactDOM.render(React.createElement(App, options), rootNode as HTMLElement)
  }

  destroy() {
    const rootNode = document.getElementById('page1')
    ReactDOM.unmountComponentAtNode(rootNode as HTMLElement)
  }
}

function app(window) {
  const sdk = new PageWidget()
  window.PAGE1 = window.PAGE1 || {}

  window.PAGE1.init = sdk.initPage1
  const queue = window.PAGE1.q
  if (Array.isArray(queue)) {
    for (let i = 0; i < queue.length; i++) {
      let event = queue[i]

      if (event && event.type === 'initPage1') {
        window.PAGE1.init(event.payload)
      }
    }
    window.PAGE1.q = []
  }
}

app(window)

export default app
