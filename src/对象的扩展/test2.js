/**
 * Created by zhangran on 16/3/13.
 */
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123,
  ['h'+'ello']() {
    return 'hi';
  }
};

