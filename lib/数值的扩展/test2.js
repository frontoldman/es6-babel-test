'use strict';

/**
 * Created by zhangran on 16/3/13.
 */

Number.isFinite(15); //不支持
Number.isNaN(NaN); //不支持
Number.parseInt('12.34'); //不支持
Number.parseFloat('123.45#'); //不支持
Number.isInteger(25); //不支持
Number.EPSILON;
Number.isSafeInteger('a');