import Page1 from "./pages/page1/page-sdk";
import Page2 from "./pages/page2/page-sdk";
import Page3 from "./pages/page3/page-sdk";
import "./App.css";

function App() {
  Page1(window);
  Page2(window);
  Page3(window);
  return <div className="App">{/* change here */}</div>;
}

export default App;
