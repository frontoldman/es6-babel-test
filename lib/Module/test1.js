'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _circle = require('circle');

Object.keys(_circle).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _circle[key];
    }
  });
});

exports.default = function (x) {
  return Math.exp(x);
};

var e = exports.e = 2.71828182846; /**
                                    * Created by zhangran on 16/3/13.
                                    */