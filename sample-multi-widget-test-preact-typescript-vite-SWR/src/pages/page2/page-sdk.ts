import { render } from 'preact'

import App from './page-container'

declare global {
  interface Window {
    PAGE2: {
      init: (option: any) => void
      destroy: () => void
      q: any[]
    }
  }
}


class PageWidget {
  instance = null

  initPage2(options: any) {
    const rootNode = document.getElementById('page2')!
    if (!rootNode) {
      throw new Error('no container dom to render view')
    }
    render(null, rootNode as HTMLElement)
    render(App(options), rootNode)
  }

  destroy() {
    const rootNode = document.getElementById('page2')
    render(null, rootNode as HTMLElement)
  }
}

function app(window: Window & typeof globalThis) {
  const sdk = new PageWidget()
  window.PAGE2 = window.PAGE2 || {}

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
