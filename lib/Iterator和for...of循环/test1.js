'use strict';

/**
 * Created by zhangran on 16/3/13.
 */

var arr = ['a', 'b', 'c'];
var iter = arr[Symbol.iterator](); //不支持

iter.next(); // { value: 'a', done: false }

var es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = es6[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    e = _step.value;
    //可以转换。没有意义
    console.log(e);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}