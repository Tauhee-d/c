const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const demoRoutes = require('./routes/demoRoute')

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/demo',demoRoutes.routes)


app.listen(config.port, () => {
    console.log(`server listening on ${config.port}`)
})