const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('I am running node server with nodemon..')
})

app.get('/hello', (req, res) => {
    res.send(
        { hello: 'Hello', world: 'World' }
    )
})

const usersObj = [{ id: 1, name: 'Emma' }, { id: 2, name: 'Leena' }, { id: 3, name: 'Hermione' }]
const users = ['Emma', 'Leena', 'Jane', 'Georgina', 'Hermione']
app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    const user = usersObj.find(({ id }) => id == userId)
    res.send(user)
})

app.listen(3000, () => {
    console.log('listening to port 3000..')
})