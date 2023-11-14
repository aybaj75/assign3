// Import files 
const express = require('express')
const app = express()
const expresslayouts= require('express-ejs-layouts') 
const port = 3000
 
// Static Files 
app.use(express.static('public'))
app.use('/css', express.static(__dirname+ 'public/css'))
app.use('/js', express.static(__dirname+ 'public/js'))
app.use('/img', express.static(__dirname+ 'public/img'))

app.get('', (req, res) =>{
    res.render('index', { text:'Ayaan Home Page'})
})

app.get('/about', (req, res) =>{
    res.render('about', { text:'About Ayaan'})
})

app.get('/project', (req, res) =>{
    res.render('project', { text:'Portfolio'})

})

app.get('/contact', (req, res) =>{
    res.render('contact', { text:'Contact'})

})
//above are the files with the ejs template and calling it.

//Set the Views 
app.use(expresslayouts)
app.set('layout', './layouts/full-width')
app.set('view engine', 'ejs')



//Listen to the port 3000 
app.listen(port, () => console.info(`Listening on port ${port}`))