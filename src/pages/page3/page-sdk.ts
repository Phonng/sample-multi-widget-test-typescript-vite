import React from 'react'
import ReactDOM from 'react-dom'

import App from './page-container'

class PageWidget {
  instance = null

  initPage3(options) {
    const rootNode = document.getElementById('page3')!
    if (!rootNode) {
      throw new Error('no container dom to render view')
    }
    ReactDOM.unmountComponentAtNode(rootNode)
    ReactDOM.render(React.createElement(App, options), rootNode as HTMLElement)
  }

  destroy() {
    const rootNode = document.getElementById('page3')
    ReactDOM.unmountComponentAtNode(rootNode as HTMLElement)
  }
}

function app(window) {
  const sdk = new PageWidget()
  window.PAGE3 = window.PAGE3 || {}

  window.PAGE3.init = sdk.initPage3
  const queue = window.PAGE3.q
  if (Array.isArray(queue)) {
    for (let i = 0; i < queue.length; i++) {
      let event = queue[i]

      if (event && event.type === 'initPage3') {
        window.PAGE3.init(event.payload)
      }
    }
    window.PAGE3.q = []
  }
}

app(window)

export default app
