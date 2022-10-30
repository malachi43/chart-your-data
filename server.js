const {products } = require("./data")
console.log(products)

const express = require("express");
const app = express()

app.get("/api/products", (req, res)=>{
    console.log("user hit the server")
    console.log(req.url)
    const newProducts = products.map((products)=>{
        const {id, product} = products
        return {id, product}
    })
    res.status(200).json(newProducts)
})

app.get("/api/products/:id", (req, res)=>{
    console.log("user hit the server")
    console.log(req.params)
    const productID = req.params.id;
    console.log(`product id is: ${productID}`)

    const singleProducts = products.find((product)=> (product.id === Number(productID)))
    if(!singleProducts){
        res.status(400).send(`<h3>Oops! Product does not exist</h3>`);
    }else{
        res.status(200).json(singleProducts)
    }
    
})

app.get("/api/v1/query", (req, res)=>{
    console.log(req.query)
    const {search, limit } = req.query;
    let searchProduct = products.map((productToFilter)=>{
        const {id, product} = productToFilter
        return {id, product}
    })

    if(search){
      searchProduct = searchProduct.filter((singleItem)=> singleItem.product.startsWith(search))
    
    }
    if(Number(limit)){
        searchProduct = searchProduct.slice(0,Number(limit))
       
    }
    if(searchProduct.length < 1){
        return res.status(200).json({success: true, data: "no products matched your search"})
    }

  res.status(200).json(searchProduct)
})

app.get("/", (req, res)=>{
    console.log("user hit the server")
    console.log(req.url)
    res.status(200).send(`<h1>Products</h1><a href="/api/products">See all products</a>`)
})


app.listen(8000, ()=>{
    console.log(`Server is up and listening at port 8000`)
})