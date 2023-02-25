const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')
const route = require('./routes')
const { engine } = require ('express-handlebars')
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public/')))
app.use(morgan('combined'))

// app.engine('handlebars', engine())
// app.set('view engine', 'handlebars')

app.engine('hbs', engine({extname: '.hbs',}),)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
