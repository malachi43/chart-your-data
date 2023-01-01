const express = require('express')
const path = require('path')
const app = express()

//Set the public folder as the root path.
app.use(express.static(path.join(__dirname, "./public")))

app.listen(3000, ()=>console.log(`Server running on port 3000...`))