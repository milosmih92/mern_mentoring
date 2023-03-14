require('rootpath')()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const apiRoutes = require('./router')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

// enable cors
app.use(cors())

// setup api routes
app.use('/api', apiRoutes)

module.exports = app