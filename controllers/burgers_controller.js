const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//gets all burgers from the db
router.get('/', (req, res) => {
  burger.all(results => {
    let hbObj = {
      burgers: results
    }
    res.render("index", hbObj);
  })
})

router.post('/api/burgers', (req, res) => {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (results) => {
    res.json({ id: results.insertId });
  })
});

//deletes a burger
router.delete('/api/burgers/delete/:id', (req, res) => {
  burger.delete(req.params.id, results => {
  })
  res.end();
})

//changes a burger from not devoured to devoured
router.put('/api/burgers/change/:id', (req, res, next) => {
  burger.update(req.body, req.params.id, results => {
  })
  res.end()
})

module.exports = router;
