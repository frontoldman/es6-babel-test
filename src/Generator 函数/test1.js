/**
 * Created by zhangran on 16/3/13.
 */

function* helloWorldGenerator() { //好像可以转换，不过貌似需要插件支持
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();