// function to fetch data from multiple urls 
async function fetchData(url){
   const response =  await fetch(url);
    const data = await response.json() ;
    return data;
}

// example urls to fetch data from 
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users'
  ];

// function to fetch data from  multiple urls  consurrently

async function fectchAllData(urls){
    // create an array of promises 
 const fetchPromises  = urls.map(url => fetchData(url));
   const result =  await Promise.all(fetchPromises);
   return result;

}

//calling async function to call multiple urls 


fectchAllData(urls).then((results)=>{
    results.forEach((data,index)=>{
    console.log(`data from url :: ${urls[index]} :: `,data.slice(0,3)
);
})}).catch(error=> {

    console.log("Error :", error )
})