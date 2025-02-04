import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(5)
  // let myObj ={
  //   userName:"mangesh",
  //   Age:21
  // }

  // let myArr = [1,'hello',3,4,5];

  let [color, setColor] = useState("pink");
  // Array of user objects
  const users = [
    { id: 1, username: "Lawanya" },
    { id: 2, username: "Navya", btnText: "call Me" },
    { id: 3, username: "Radha", btnText: "click Me" },
    { id: 4, username: "Nandini", btnText: "Visit Me" },
    { id: 5, username: "Rati", btnText: "chat Me" },
    { id: 6, username: "swati", btnText: "Visit Me" },
  ];

  return (
    <>


      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind Test </h1>

      {/* <Card username="Lawanya" /> */}
      {/* <Card username="Lawanya" someObj ={myArr}/> */}
      {/* <Card  username="Navya" btnText="Visit Me"/> 
    <Card  username="Radha" btnText="Visit Me"/> 
    <Card  username="Nandini" btnText="Visit Me"/> 
    <Card  username="Rati" btnText="Visit Me"/>  */}

      <div className=" container ml-10 mt-10 ">
        <h1 className="text-2xl font-bold text-center mb-4">User Cards</h1>
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {users.map((user) => (
            <Card key={user.id} username={user.username} btnText={user.btnText} />
          ))}
        </div>
      </div>




      <figure className="mt-5 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/28057654/pexels-photo-28057654/free-photo-of-a-couple-kissing-on-the-bed-in-front-of-a-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512"></img>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default App
