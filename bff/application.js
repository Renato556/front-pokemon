'use strict';
const express = require('express')
const router = require('./src/main/gateway/http/router')(express.Router())
const cors = require('cors')

const PORT = process.env.PORT || 8082
const app = express()

app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
  console.log(`application running on port ${PORT}`)
})