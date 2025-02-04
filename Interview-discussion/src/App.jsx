import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log('App Rendered',Math.random());
  
  const [value, setValue] = useState({value:0,});


  // const [MutiplyValue, setMultiplyValue] = useState(1);
// let MutiplyValue = value * 5 ;

  // let Multiplybyfive = () =>{
  //     // setMultiplyValue(value * 5);
  //     setValue(value + 1);

  // }

  let clickMe = () =>{
    // console.log( value +1);
    setValue( {value:0,});
    // setValue( value +1);
    
  }

  return (
    <>
      <h1>Main Value : {value.value} </h1>
      <button onClick={clickMe}> Click to Multiply by 5 </button>
      {/* <h2>Multiplied Value : {MutiplyValue}</h2> */}
    </>
  )
}

export default App
