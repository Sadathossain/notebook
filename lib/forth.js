"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "\\ Insertion sort\n\n: cell-  1 cells - ;\n\n: insert ( start end -- start )\n  dup @ >r ( r: v )\n  begin\n    2dup <\n  while\n    r@ over cell- @ <\n  while\n    cell-\n    dup @ over cell+ !\n  repeat then\n  r> swap ! ;\n\n: sort ( array len -- )\n  1 ?do\n    dup i cells + insert\n  loop drop ;\n";
var _default = code;
exports.default = _default;