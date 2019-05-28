const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', function(req, res) {
  burger.all(function(data) {
    console.log(data);
    let hbObj = {
      burgers: data
    }
    res.render("index", hbObj);
  })
})

module.exports = router;
