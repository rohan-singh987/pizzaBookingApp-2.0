const express = require('express')
const app = express()

const ejs = require('ejs')
const expressLayout = require('express-js-layouts')

// if(process.env.PORT) {
//     PORT.process.env.PORT
// } 
// else{
//     PORT = 3000
// }

const PORT = process.env.PORT || 3300;

app.get('/', (req, res) => {
    res.render("Hello")
})

//  Set Template Engine

app.listen(PORT ,() => {
    console.log(`listening on port ${PORT}`)
})