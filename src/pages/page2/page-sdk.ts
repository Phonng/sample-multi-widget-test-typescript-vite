import React from "react";
import ReactDOM from "react-dom";

import App from "./page-container";

class PageWidget {
  static instance = null;

  static init(options) {
    const rootNode = document.getElementById("page2")!;
    if (!rootNode) {
      throw new Error("no container dom to render view");
    }
    ReactDOM.unmountComponentAtNode(rootNode);
    ReactDOM.render(React.createElement(App, options), rootNode as HTMLElement);
  }

  static destroy() {
    const rootNode = document.getElementById("page1");
    ReactDOM.unmountComponentAtNode(rootNode as HTMLElement);
  }
}

export default PageWidget;
