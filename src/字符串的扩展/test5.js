/**
 * Created by zhangran on 16/3/13.
 */

var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`


function fn() {
  return "Hello World";
}

`foo ${fn()} bar`

String.raw`Hi\n${2+3}!`;
