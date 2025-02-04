import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [color, setColor] = useState('olive')
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
// ref hook 
const passwordRef = useRef(null)

//useCallback :memorize function as long as possible 
  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

let copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99);
  window.navigator.clipboard.writeText(password);//window object is not present on server-side
},[password])


useEffect(() => {
  
  passwordGenerator()
},[length, numberAllowed, charAllowed, setPassword,passwordGenerator])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md
  rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">

        <h1 className='my-3 text-center 
     text-white '>Password Generator</h1>


        <div className="flex shadow rounded-lg
  overflow-hidden mb-4">
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly 
            ref={passwordRef}
            />
              <button
              onClick={copyPasswordToClipboard}
              className='outline-none bg-blue-700 text-white
              px-3 py-0.5 shrink-0 '
              > copy </button>

        </div>
        <div className="flex text-5m gap-x-2">
          <div className="flex item-center gap-x-1">
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => 
                !prev);//prev value =reverse value(false/true)
            }}
            />
            <label htmlFor="numberInput">Numbers </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => 
                !prev);//prev value =reverse value(false/true)
            }}
            />
            <label htmlFor="charInput">Characters </label>
            </div>
        </div>

      </div>
    </>
    /* <div 
        style={{backgroundColor: color}}
        > 
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'red'}}>Red </button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1  rounded-full text-white shadow-lg" style={{backgroundColor: 'green'}}>green </button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'yellow'}}>yellow </button>
            <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'violet'}}>violet </button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'purple'}}>purple </button>
            <button onClick={() => setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'indigo'}}>indigo </button>
            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'pink'}}>pink </button>
            <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'brown'}}>brown </button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'blue'}}>blue </button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: 'orange'}}>orange </button>
          </div>
    
        </div>
         </div>  */

  )
}

export default App
