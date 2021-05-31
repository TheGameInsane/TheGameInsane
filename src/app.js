const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const path = require('path')
const hbs = require('hbs')

const publicPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../template/views")
const partialsPath = path.join(__dirname, "../template/partials")

app.use(express.static(publicPath))
app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialsPath)

// Routing
app.get("/", (req, res) => {
    res.render('index.hbs')
})

app.get("/about", (req, res) => {
    res.render('about.hbs')
})

app.get("/games", (req, res) => {
    res.render("games.hbs")
})

app.get("/youtube", (req, res) => {
    res.render("youtube.hbs")
})

app.get("/top.gg", (req, res) => {
    res.status(200)
})

app.get("*", (req, res) => {
    res.render('404Error.hbs')
})

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})
