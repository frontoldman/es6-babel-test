/**
 * Created by zhangran on 16/3/13.
 */

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();    //不支持

iter.next() // { value: 'a', done: false }


var es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};


for (e of es6) {  //可以转换。没有意义
  console.log(e);
}