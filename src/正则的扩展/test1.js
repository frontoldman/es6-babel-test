/**
 * Created by zhangran on 16/3/13.
 */
//var regex = new RegExp(/xyz/i); //不支持

/^\uD83D/u.test('\uD83D\uDC2A'); //支持但是有问题

var s = '𠮷';

(/^.$/).test(s) // false 支持 但是要加括号
(/^.$/u).test(s) // true

var r2 = /a+/y; //不支持