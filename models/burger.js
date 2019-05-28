const orm = require('../config/orm.js');

let burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res, err) {
      if(err) throw err;
      cb(res);
    })
  }
}


module.exports = burger;
