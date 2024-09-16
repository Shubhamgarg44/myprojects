import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Manager/>
     <div>my Ui</div>
    </>
  )
}

export default App
