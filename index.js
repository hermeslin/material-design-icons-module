'use strict';
module.exports = {
  STATIC_PATH: __dirname,
  load: function (width, name) {
    let iconPath =  width + 'px/' + name;
    return require('./icons/' + iconPath + '.js');
  }
};
