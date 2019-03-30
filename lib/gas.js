"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = ".syntax unified\n.global main\n\n/* \n *  A\n *  multi-line\n *  comment.\n */\n\n@ A single line comment.\n\nmain:\n        push    {sp, lr}\n        ldr     r0, =message\n        bl      puts\n        mov     r0, #0\n        pop     {sp, pc}\n\nmessage:\n        .asciz \"Hello world!<br />\"\n\n";
var _default = code;
exports.default = _default;