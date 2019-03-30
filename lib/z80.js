"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "#include    \"ti83plus.inc\"\n#define     progStart   $9D95\n    .org progStart-2\n    .db $BB,$6D\n\n    bcall(_ClrLCDFull)\n    ld hl,0\n    ld (CurCol),hl\n    ld hl,Message\n    bcall(_PutS) ; Displays the string\n    bcall(_NewLine)\n    ret\nMessage:\n    .db \"Hello world!\",0\n\n";
var _default = code;
exports.default = _default;