const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('I am running node server..')
})

app.listen(3000, () => {
    console.log('listening to port 3000..')
})