import { useState } from 'react'

import './App.css'
import List from './Components/List';
import InputField from './Components/InputField';
import DataFetching from './Components/DataFetching';
import UserList from './Components/UserList';

function App() {
// let counter = 15;

let [counter, setCounter] = useState(10);

const addValue = () => {
  if(counter<20) {
    // counter = counter+1;
    
    setCounter((prevCounter) => (prevCounter+1));
    
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    // setCounter(prevCounter => prevCounter+1);
    
  }
  // console.log("value added",Math.round(Math.random()*10));
  // console.log("value added",counter);
}

const removeValue = () => {
  if(counter>0){
    setCounter(counter - 1);
  }
}

  return (
    <>

    {/* <List/> */}

     <h1> Chai Aur React !!</h1>
     {/* <h2> Counter Value : {counter}</h2>
     <button onClick = {addValue}> Insert Value {counter}</button>
     <br />
     <button onClick={removeValue} > Remove Value {counter}</button> */}
     {/* <InputField/> */}

    {/* <DataFetching/> */}
    <UserList/>

     
    
    </>
  )
}

export default App
