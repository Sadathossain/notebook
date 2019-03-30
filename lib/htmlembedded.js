"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "<%\nfunction hello(who) {\n  return \"Hello \" + who;\n}\n%>\nThis is an example of EJS (embedded javascript)\n<p>The program says <%= hello(\"world\") %>.</p>\n<script>\n  alert(\"And here is some normal JS code\"); // also colored\n</script>\n\n";
var _default = code;
exports.default = _default;