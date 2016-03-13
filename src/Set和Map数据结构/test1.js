/**
 * Created by zhangran on 16/3/13.
 */

var s = new Set();  //不支持

[2,3,5,4,5,2,2].map(x => s.add(x))

var ws = new WeakSet(); //不支持
ws.add(1)


var m = new Map(); //不支持