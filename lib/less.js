"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "@base: #f938ab;\n\n@width: 10px;\n@height: @width + 10px;\n\n#header {\n  width: @width;\n  height: @height;\n}\n\n.box-shadow(@style, @c) when (iscolor(@c)) {\n  -webkit-box-shadow: @style @c;\n  box-shadow:         @style @c;\n}\n.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {\n  .box-shadow(@style, rgba(0, 0, 0, @alpha));\n}\n.box {\n  color: saturate(@base, 5%);\n  border-color: lighten(@base, 30%);\n  div { .box-shadow(0 0 5px, 30%) }\n}\n";
var _default = code;
exports.default = _default;