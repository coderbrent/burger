const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', function(req, res) {
  burger.all( (results) => {
    let hbObj = {
      burgers: results
    }
    console.log(hbObj);
    res.render("index", hbObj);
  })
})

module.exports = router;
