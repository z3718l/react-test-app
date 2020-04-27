const express = require('express')
const app = express()
const port = 3100
app.get('/api/list', (req, res) => {
    res.send(
        [{
            name: 'hah',
            age: 12
        },{
            name: 'hah2',
            age: 23
        }]
    )
})
app.listen(port, () => {
    console.log('node is ok')
})