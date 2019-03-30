"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "(* Example Pascal code *)\n\nwhile a <> b do writeln('Waiting');\n \nif a > b then \n  writeln('Condition met')\nelse \n  writeln('Condition not met');\n \nfor i := 1 to 10 do \n  writeln('Iteration: ', i:1);\n \nrepeat\n  a := a + 1\nuntil a = 10;\n \ncase i of\n  0: write('zero');\n  1: write('one');\n  2: write('two')\nend;\n\n";
var _default = code;
exports.default = _default;