import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './view/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hello/>
    </div>
  )
}

export default App
