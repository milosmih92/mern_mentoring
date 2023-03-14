const app = require('./app')

// start server
const productionPort = process.env.PORT ? process.env.PORT : 80
const port = process.env.NODE_ENV === 'production' ? productionPort : 5000
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})