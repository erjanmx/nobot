const url = require('url')
const router = require('express').Router()
const request = require('request-promise')

router.get('/', function (req, res) {
    request(req.originalUrl.slice(1)).pipe(res)
})

module.exports = router
