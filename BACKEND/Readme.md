##
npm init -y: node package manager se package ko initialize kr do: for permission (y);







## Backend
    npm init
    npm i express
    touch server.js
 package.json 
    'start' : 'node server.js'
    <!-- to use import  -->
    "type":'module'
    import express from 'express' // it works asynchronously
    1. make app
    2. serve
        app.get('path/', (req,res)=>{
            res.send('server is ready');
        });

        const port = process.env.PORT || 3000;

    3. listen
        app.listen(port, ()=>{
            console.log(`server is listening at http://localhost:${port}`);
        })


// use json formatter to format the data 

-----------------------------------------------------------

## Frontend
>>npm create vite@latest .
. --> current folder
ls --> package.json 
>>npm i 
>> npm run dev 

fetch() axios(), reactQuery()

axios -->
    additional features
        specially to handle web request 

Axios is a promise-based HTTP client for the browser and Node.js. It provides a simple and consistent API for making HTTP requests, handling responses, and managing errors. Axios supports features like request and response interception, automatic transformation of JSON data, cancellation of requests, and more. It is widely used in modern web development for its ease of use and flexibility in handling HTTP communication.

Key Features of Axios:

Promise-Based: Axios uses JavaScript Promises, making it easy to handle asynchronous operations.

Browser and Node.js Support: It works seamlessly in both browser and Node.js environments.

Request and Response Interceptors: Allows you to intercept and modify requests or responses globally.

Automatic JSON Data Transformation: Automatically transforms request and response data to and from JSON.

Cancellation: Supports canceling requests using cancel tokens.

Error Handling: Provides robust error handling for HTTP errors (e.g., 404, 500).

Global Configuration: Allows setting default configurations for all requests.

Concurrent Requests: Supports making multiple requests simultaneously using axios.all.

    // GET request
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

    // POST request
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });


<!-- CORS :: cross origin -->
url , port num needs to be same on cors
    url, port no needs to be whitelist by backend dev  

install cors package backend


how to handle cors error

### proxy

proxies -- search google
frontend check toolchain syntax 
 for create react app
package.json 

for vite app
vite.config.js

    export default defineConfig({
    server:{
        proxy:{ 
        // url append behind api and ensures proxy comes from these url 
        '/api':'http://localhost:3000',  
        // request ki origin isi url se  
        },
    },
    plugins: [react()],
    })
