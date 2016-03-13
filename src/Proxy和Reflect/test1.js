/**
 * Created by zhangran on 16/3/13.
 */

var proxy = new Proxy({}, {     //不支持
  get: function(target, property) {
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35

Reflect.has(Object, 'assign') // 不支持

