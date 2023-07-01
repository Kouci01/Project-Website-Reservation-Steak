const express = require('express')
const app = express()
const port = 5000


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

// Set Views
app.set('views','./views')
app.set('view engine','ejs')

app.get('', (req, res) => {
    res.render('index', { title: 'Home Page'})
})

app.get('/about', (req, res) => {
    res.render('aboutus', { title: 'About Us Page'})
})

app.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menu Page'})
})

app.get('/promo', (req, res) => {
    res.render('promo', { title: 'Menu Page'})
})

app.get('/reserve', (req, res) => {
    res.render('reserve', { title: 'Menu Page'})
})

app.listen(port, ()=> {
    console.info(`App listening on port ${port}`)
})