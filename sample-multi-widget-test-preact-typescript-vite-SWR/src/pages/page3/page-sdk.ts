import { render } from 'preact'

import App from './page-container'

declare global {
  interface Window {
    PAGE3: {
      init: (option: any) => void
      destroy: () => void
      q: any[]
    }
  }
}

class PageWidget {
  instance = null

  initPage3(options: any) {
    const rootNode = document.getElementById('page3')!
    if (!rootNode) {
      throw new Error('no container dom to render view')
    }
    render(null, rootNode as HTMLElement)
    render(App(options), rootNode)
  }

  destroy() {
    const rootNode = document.getElementById('page3')
    render(null, rootNode as HTMLElement)
  }
}

function app(window: Window & typeof globalThis) {
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
