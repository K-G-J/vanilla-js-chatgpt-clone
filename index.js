const express = require('express')
const path = require('path')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, '/')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})
