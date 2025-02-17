import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, basitCounter] = useState(15)


  //let counter = 5
  const addValue = () => {
    console.log('clicked', counter);
    
     basitCounter(counter++)
  }
  const removeValue = ()=>{
    basitCounter(counter--)
  }
  return (
    <>
      <h1>React chal Ra hai</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
