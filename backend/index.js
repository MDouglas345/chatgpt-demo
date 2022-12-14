var express = require('express');

var ext = require('./api/source')


var router = express.Router()

const cors = require('cors');



var app = express().use(express.json()).use(cors({ origin: "*", optionsSuccessStatus: 200 })).use(router)


router.post("/", (req, res)=>{
   ext.createResponse(req,res)
})



var server = app.listen(8081, "127.0.0.1", function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})