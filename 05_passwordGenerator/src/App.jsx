import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { toast } from 'react-hot-toast'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++){
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    toast.success('Password copied to clipboard!', {
      position: 'top-center',
      style: {
        background: '#1F2937',
        color: '#fff',
      }
    })
  }, [password])

  useEffect(() => { passGen() }, [length, numAllowed, charAllowed, passGen])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-slate-600">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Password Generator
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            placeholder="Generate password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClip}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
            aria-label="Copy password"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-slate-300">
              <label>Length: {length}</label>
              <span className="text-blue-400">{length}</span>
            </div>
            <input
              type="range"
              min="6"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed(prev => !prev)}
                className="form-checkbox h-5 w-5 text-blue-400 rounded focus:ring-blue-400 border-slate-600 bg-slate-800"
              />
              <span className="text-slate-300">Include Numbers</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
                className="form-checkbox h-5 w-5 text-blue-400 rounded focus:ring-blue-400 border-slate-600 bg-slate-800"
              />
              <span className="text-slate-300">Special Characters</span>
            </label>
          </div>

          <button
            onClick={passGen}
            className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App