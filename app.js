const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/pages/index.html')))

app.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`))