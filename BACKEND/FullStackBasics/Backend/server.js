import express from 'express'; 

// module js
// work asynchronously


const app = express();

// app.use(express.static('dist')); // Not Good Practice 


app.get('/', (req,res) => {

    res.send("server is ready");

});

// port comes from env var or we write manually 

// 'get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = 
    [ 
        {id:1,
         title:"A joke",
         content:"Take a title as what you want ",
        },

        {id:2,
         title:"other joke",
         content:" title as what you want ",
        },

        {id:3,
         title:"New joke",
         content:" what you want ",
        },

        {id:4,
         title:"A Jemini book",
         content:"Take a title Three",
        },

        {id:5,
         title:"An another Story",
         content:"Take a New title as what you want ",
        },
    ];
    res.send(jokes);
});



const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});