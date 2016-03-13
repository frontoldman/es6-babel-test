'use strict';

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by zhangran on 16/3/13.
 */

function log(x) {
  var y = arguments.length <= 1 || arguments[1] === undefined ? 'World' : arguments[1];
  //支持
  console.log(x, y);
}

function foo(_ref) {
  var x = _ref.x;
  var _ref$y = _ref.y;
  var y = _ref$y === undefined ? 5 : _ref$y;

  console.log(x, y);
}

function add() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;

      sum += val;
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

  return sum;
}

(_console = console).log.apply(_console, [1].concat([2, 3, 4], [5]));

[].concat(_toConsumableArray('hello'));