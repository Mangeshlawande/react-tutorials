import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1>
    My Custom App !
  </h1>
  <pre> 
    App is a function, vite Ek bundler use karta hai hence
     the jsx syntax comes from the bundler (babble, vite etc.,),  behind the seen :
    bundler used for : to upgrade the syntax, build the syntax, syntax convert kerne ka kam bundler ka hota hai ,

    REACT DON'T UNDERSTAND HTML SYNTAX, hence we called JSX,   html in javascript
    

     </pre>
    </>
  )
}
// const ReactElement = {
//   type :"a",
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:'click me to visit google'
//   }
  
// // let anotherElement  = (
// // <a href='https://google.com' target='_blank'>visit google </a>
// // )
// let anotherUser = "chai aur REACT"

// const reactElement =React.createElement(
//   'a',
//   {href:"https://google.com", target:"_blank"},
//   "click to visit GOOGLE",
//   anotherUser
// )



createRoot(document.getElementById('root'))
.render(

  
)
