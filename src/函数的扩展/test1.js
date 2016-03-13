/**
 * Created by zhangran on 16/3/13.
 */

function log(x, y = 'World') { //支持
  console.log(x, y);
}

function foo({x, y = 5}) {
  console.log(x, y);
}

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}


console.log(1, ...[2, 3, 4], 5);

[...'hello']


