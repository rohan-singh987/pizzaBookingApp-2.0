const express = require('express')
const app = express()

const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-e js-layouts')

// if(process.env.PORT) {
//     PORT.process.env.PORT
// } 
// else{
//     PORT = 3000
// }

const PORT = process.env.PORT || 3300;

app.get('/', (req, res) => {
    res.render("home")
})

//  Set Template Engine
app.use(expressLayout) 
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT ,() => {
    console.log(`listening on port ${PORT}`)
})