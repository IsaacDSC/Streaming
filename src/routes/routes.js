const express = require('express')
const router = express()
const path = require('path')
const static = path.join(__dirname, '../', 'public', 'static')

router.get('/', (req, res) => {
    res.sendFile(static + '/index.html')
})


module.exports = router