const express = require('express')
const path = require('path')
const ejs=require('ejs')
const app=express();

const home_route=require('./routes/homeRoutes')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages')) 

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(home_route)

app.listen(3000, () => {
    console.log('listening on port 3000!')
})