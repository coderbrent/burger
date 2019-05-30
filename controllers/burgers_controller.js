const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
  burger.all( (results) => {
    let hbObj = {
      burgers: results
    }
    console.log(hbObj);
    res.render("index", hbObj);
  })
})

router.post('/api/burgers', (req, res) => {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (results) => {
    console.log(results)
    res.json({ id: results.insertId });
  })
})

module.exports = router;
