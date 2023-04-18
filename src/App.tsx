import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page1 from './pages/page1/page-sdk'
import Page2 from './pages/page2/page-sdk'
import Page3 from './pages/page3/page-sdk'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  )
}

export default App
