var express = require('express')
var router = express.Router()
const path = require('path')

var maindom = path.join(__dirname,'/views/index.html')
var recurso1 = path.join(__dirname,'/server/data1.json')
var recurso2 = path.join(__dirname,'/server/data2.json')




router.get('/', function(req, res) {
  res.sendFile(maindom)
})


router.get('/src/server/', function(req, res) {

  res.sendFile(recurso1)
  res.sendFile(recurso2)
})

module.exports = router
