const url = require('url')
const axios = require('axios')
const router = require('express').Router()

router.get('/', function (req, res) {
  axios.get(req.originalUrl.slice(1)).then(function (response) {
    res.contentType('content-type', 'application/octet-stream')
    res.send(response)
  })
  .catch(function (error) {
    console.log(error)
  })
})

module.exports = router
