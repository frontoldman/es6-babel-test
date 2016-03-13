"use strict";

/**
 * Created by zhangran on 16/3/13.
 */

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2); //不支持