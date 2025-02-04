// import React, { useState, useEffect } from 'react';

// function DataFetching() {
//   const [data, setData] = useState(null); // State to store fetched data
//   const [loading, setLoading] = useState(true); // State to track loading status
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     // Fetch data from the server
//     fetch('https://jsonplaceholder.typicode.com/posts') // Example API
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parse JSON data
//       })
//       .then((data) => {
//         setData(data); // Update state with fetched data
//         console.log('Fetched data:', data); // Log data to console
//         setLoading(false); // Set loading to false
//       })
//       .catch((error) => {
//         setError(error); // Handle errors
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array ensures this runs only once

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//        {data && data.map((item)=>(
//         <li key={item.id} >
//             <h2>{item.title}</h2>
//             <p>{item.body}</p>
//         </li>
//        ))}
//       </ul>
//     </div>
//   );
// }

// export default DataFetching;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts') // Example API
      .then((response) => {
        setData(response.data); // Update state with fetched data
        console.log('Fetched data:', response.data); // Log data to console
        setLoading(false);
      })
      .catch((error) => {
        setError(error); // Handle errors
        console.error('Error fetching data:', error);
        setLoading(false);  
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
     <ol type="i">
     {data &&
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
     </ol>
    </div>
  );
}

export default DataFetching;