const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.listen(8080, () =>{
    console.log('servidor corriendo')
})
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))

})
app.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

