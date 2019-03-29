const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {res.send('get user response data')})
app.post('/', (req, res) => {res.send('post user response data')})
app.put('/', (req, res) => {res.send('put user response data')})
app.delete('/', (req, res) => {res.send('delete user response data')})





module.exports = app