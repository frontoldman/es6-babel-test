"use strict";

var _templateObject = _taggedTemplateLiteral(["Hi\n", "!"], ["Hi\\n", "!"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by zhangran on 16/3/13.
 */

var name = "Bob",
    time = "today";
"Hello " + name + ", how are you " + time + "?";

function fn() {
  return "Hello World";
}

"foo " + fn() + " bar";

String.raw(_templateObject, 2 + 3);