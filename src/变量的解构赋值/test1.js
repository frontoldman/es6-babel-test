/**
 * Created by zhangran on 16/3/13.
 */

var [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];

let [ , , third] = ["foo", "bar", "baz"];

let [head, ...tail] = [1, 2, 3, 4];

var [foo1] = [];

var [x, y = 'b'] = ['a', undefined] // x='a', y='b'