import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let newArr = [1,2,3]


  return (
    <>
    <h1 className='bg-green-400  text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
    <Card userName="Heat and Cold" someObj = {newArr} btnText="click me"/>
    <Card userName= "Basit" btnText="Visit Me"/>
    </>
  )
}

export default App
