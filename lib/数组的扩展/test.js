'use strict';

/**
 * Created by zhangran on 16/3/13.
 */

var arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// ES6的写法
var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']  不支持

Array.of(3, 11, 8) // [3,11,8] 不支持

[(1, 2, 3, 4, 5)].copyWithin(0, 3);

[1, 4, -5, 10].find(function (n) {
  return n < 0;
});

['a', 'b', 'c'].fill(7);

['a', 'b'].keys();
['a', 'b'].values();
['a', 'b'].entries();
[1, 2, 3].includes(2);