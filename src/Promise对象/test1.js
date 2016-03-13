/**
 * Created by zhangran on 16/3/13.
 */

var promise = new Promise(function(resolve, reject) { //不支持
  if (1){
    resolve(value);
  } else {
    reject(error);
  }
});