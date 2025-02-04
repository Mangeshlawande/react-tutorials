import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios';


function App() {

//  const {products,error,loading} = customReactQuery('/api/products');
 // also use return type as an array


 // In browser Network tells the sending request 

 const [products, setPorducts] = useState([])
 const [error, setError] = useState(false);
 const [loading, setLoading] = useState(false);
 const [search, setSearch] = useState('')

// ToAvoid race condition 


// dbouncing :: it cancelled older request  like in keyboard typing word , it can fire only onClick event 
 useEffect(() => {
  // 1. make controller
  const controller = new AbortController()
  // automatically cancelled the recent/older request
   ;(async () => {
     
     try {
       setLoading(true);
       setError(false);
       const response = await axios.get('/api/products?search='+search,{
        // 2. send the controller signal 
        signal: controller.signal
        // signal abort the recent request and throw in catch block it need to handle properly 
       });
       console.log(response.data)
       setPorducts(response.data);
       setLoading(false);

     } catch (error) {
      //3. handle cancelled request
// handled recent request from signalcontroller 
      if(axios.isCancel(error)){
        console.log('Request Cancelled', error.message);
        return;
      }
       setError(true);
       setLoading(false);
     }

   })();
// 4. component unmount 
   //cleanup code 
   return () => {
    // 
    controller.abort();
   };
 },[search]);



  // if (error) {
  //   return <h1>SomeThing Went Wrong </h1>
    
  // }
  // if (loading) {
  //   return <h1>Loading... </h1>
    
  // }


  return (
    <>
     <h1> Chai Aur API in React</h1>

    <input type ="text" placeholder="search"
    value = {search}
    onChange={(e) => setSearch(e.target.value)}
    />

{/* conditional rendering  */}

    {loading && (<h1>Loading... </h1>)}
    {error && (<h1>Something Went Wrong</h1>)}


     <h2>Number of products are : {products.length}</h2>

    {
      products.map((item, index)=>{
        return <div key={item.id}>
          <h2>{item.id}.  {item.name}</h2>
          <p>Price - {item.price}</p>
          <p>Quantity -{item.quantity}</p>
        </div>
      })
    }
    </>
  )}

export default App






// const customReactQuery = (urlPath) => {
//   const [products, setPorducts] = useState([])
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     (async () => {
      
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data)
//         setPorducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }

//     })();
//   },[]);

//   return {
//     products,
//     error,
//     loading
//   }
// }