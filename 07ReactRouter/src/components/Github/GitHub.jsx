import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
const  data = useLoaderData() // load data in optimize way

   // const [data,setData] = useState([])

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     // fetch('https://api.github.com/users/mangeshlawande')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
// optimization gives react router / next Js

    return (


        <div className="text-center m-5 bg-gray-600 text-white
        p-4 text-3xl">GitHub followers:{data.followers} 
        <img className="text-center" src={data.avatar_url} alt="Git Picture" width={300} />
        
        </div>
    )
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}