import { render } from 'preact'

import App from './page-container'

declare global {
  interface Window {
    PAGE1: {
      init: (option: any) => void
      destroy: () => void
      q: any[]
    }
  }
}


class PageWidget {
  instance = null

  initPage1(options: any) {
    const rootNode = document.getElementById('page1')!
    if (!rootNode) {
      throw new Error('no container dom to render view')
    }
    render(null, rootNode as HTMLElement)
    render(App(options), rootNode)
  }

  destroy() {
    const rootNode = document.getElementById('page1')
    render(null, rootNode as HTMLElement)
  }
}

function app(window: Window & typeof globalThis) {
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
