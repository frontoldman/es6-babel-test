'use strict';

/**
 * Created by zhangran on 16/3/13.
 */
//var regex = new RegExp(/xyz/i); //不支持

/^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('🐪'); //支持但是有问题

var s = '𠮷';

/^.$/.test(s) // false 支持 但是要加括号
(/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/).test(s); // true

var r2 = new RegExp('a+', 'y'); //不支持