const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {res.send('get blog response data')})
app.post('/', (req, res) => {res.send('post blog response data')})
app.put('/', (req, res) => {res.send('put blog response data')})
app.delete('/', (req, res) => {res.send('delete blog response data')})



module.exports = router