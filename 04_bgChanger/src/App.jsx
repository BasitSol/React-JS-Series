import { useState } from 'react';
//import './App.css';
//import "./index.css";

function App() {
  const [color, setColor] = useState("olive");  // Using hex code for reliability

  return (
    <>
      <div 
        style={{
          backgroundColor: color,
          width: "100vw",
          height: "100vh",
          transition: "background-color 0.5s ease",
        }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "gray" }}>Gray</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg' style={{ backgroundColor: "pink" }}>Pink</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
