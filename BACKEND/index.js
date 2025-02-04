// 
// main entry point
require('dotenv').config()
console.log('chai aur code');

const express = require('express')
const app = express();

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/haros', (req,res) => {
    res.send(" This is new web application page with Express and node (npm) !! ")
});

app.get('/login', (req,res) => {
    res.send("<h1> Please Login at chai aur code </h1>")
})

app.get('/youtube', (req,res) => {
    res.send("<h2> chai aur code </h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});

// server : computer

//.env (package);