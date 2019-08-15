const orm = require('../config/orm.js');

const burger = {
//crud actions for burger list
  all: (cb) => {
    orm.selectAll((res) => {
      cb(res);
    })
  },
  create: (cols, vals, cb) => {
    orm.create(cols, vals, (res) => {
      cb(res);
    })
  },
  update: (objColVals, id, cb) => {
    orm.update(objColVals, id, res => {
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
