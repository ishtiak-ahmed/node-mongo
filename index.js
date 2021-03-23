const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())


const users = [{ id: 1, name: 'Emma' }, { id: 2, name: 'Leena' }, { id: 3, name: 'Hermione' }]


app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    const user = users.find(({ id }) => id == userId)
    res.send(user)
})

app.post('/addUser', (req, res) => {
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('listening to port 3000..')
})