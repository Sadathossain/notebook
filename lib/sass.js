"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "// Variable Definitions\n\n$page-width:    800px\n$sidebar-width: 200px\n$primary-color: #eeeeee\n\n// Global Attributes\n\nbody\n  font:\n    family: sans-serif\n    size: 30em\n    weight: bold\n\n// Scoped Styles\n\n#contents\n  width: $page-width\n  #sidebar\n    float: right\n    width: $sidebar-width\n  #main\n    width: $page-width - $sidebar-width\n    background: $primary-color\n    h2\n      color: blue\n\n#footer\n  height: 200px\n";
var _default = code;
exports.default = _default;