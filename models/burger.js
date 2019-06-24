const orm = require('../config/orm.js');

const burger = {
  all: (cb) => {
    orm.selectAll((res) => {
      cb(res);
      console.log(res);
    })
  },
  create: (cols, vals, cb) => {
    orm.create(cols, vals, (res) => {
      console.log('is anything happening?')
      cb(res);
      console.log('this works ' + cols + vals)
      console.log(res)
    })
  },
  update: (objColVals, condition, cb) => {
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    })
  },
  delete: (table, id, cb) => {
    orm.delete(table, id, (res) => {
      cb(res);
    } )
  }
}

module.exports = burger;
