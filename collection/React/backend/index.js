import express from 'express';


const app = express();


app.get('/api/products',(req,res) => {
    // get a list of jokes 
    const products = [
        {
            id:1,
            name :"table wodden",
            price : 200,
            quantity : 30
        },
        {
            id:2,
            name :"table Glass",
            price : 500,
            quantity : 20
        },
        {
            id:3,
            name :"table marble",
            price : 2000,
            quantity : 10
        },
        {
            id:4,
            name :"table plastic",
            price : 300,
            quantity : 50
        },
        {
            id:5,
            name :"chair wodden",
            price : 500,
            quantity : 15
        },
        {
            id:6,
            name :"chair plastic",
            price : 500,
            quantity : 15
        },
        {
            id:7, 
            name :"chair polyester",
            price : 500,
            quantity : 15
        },
        {
            id:8,
            name :"stool plastic",
            price : 500,
            quantity : 15
        }
];
    // res.send(products)
    // simulation(delay res)

// https://localhost:3000/api/products?search=metal

if(req.query.search){
    const filterProducts = products.filter(products => 
        products.name.includes(req.query.search))
        res.send(filterProducts);
        return;
}

    setTimeout(() => {
        res.send(products);

    },2000);

})
// http://localhost:3000/api/products?search=chair



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Running On port ${port}`);
});