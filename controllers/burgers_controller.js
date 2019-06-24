const express = require('express');
const burger = require('../models/burger');
const router = express.Router();
const mysql = require('mysql')

router.get('/', (req, res) => {
  burger.all((results) => {
    let hbObj = {
      burgers: results
    }
    //console.log(hbObj);
    res.render("index", hbObj);
  })
})

router.post('/api/burgers/', (req, res) => {
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (results) => {
    console.log(results)
    res.end();
  })
});

router.put('/api/burgers/:id', (req, res) => {
  console.log('burger with the id: ' + req.params.id + ' will be deleted');
  burger.delete('burgers', [req.params.id])
  res.end();
})

module.exports = router;
