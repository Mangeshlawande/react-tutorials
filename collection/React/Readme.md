



## Frontend


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

axios ::
    