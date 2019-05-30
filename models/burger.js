const orm = require('../config/orm.js');

const burger = {
  all: (cb) => {
    orm.selectAll((res) => {
      cb(res);
      console.log(res);
    })
  }
}


module.exports = burger;
