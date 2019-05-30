const orm = require('../config/orm.js');

const burger = {
  all: (cb) => {
    orm.selectAll((res) => {
      cb(res);
      console.log(res);
    })
  },
  create: (cols, vals, cb) => {
    orm.insertOne('burgers', cols, vals, (res) => {
      cb(res);
    })
  }
}

module.exports = burger;
