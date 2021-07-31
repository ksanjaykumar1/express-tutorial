const express = require('express');
const app = new express();

const {products, people} = require('./data')
 
app.get('/',(req,res)=>{
    res.send('<h1>Home page </h1> <a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id , name, image}=product;
        return {id,name,image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productId',(req,res)=>{
    const id = req.params.productId;
    const singleProduct = products.find((product)=> product.id== id)
    if(!singleProduct){
        res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
}) 

app.get('/api/v1/query', (req,res)=>{
    const {search, limit }= req.query
    let sortedProducts = [...products]
    
    if(search){
        sortedProducts = sortedProducts.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length <1){
        // add return statement to prevent error message
        // if return not added here there will be two response messages
        return res.status(200).send({success:true, data:[]})
    }
    res.status(200).json({success:true,data:sortedProducts})
    console.log(req.query)
    // res.send("hello world")
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})