"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "<?php\n$a = array('a' => 1, 'b' => 2, 3 => 'c');\n\necho \"$a[a] ${a[3] /* } comment */} {$a[b]} \\$a[a]\";\n\nfunction hello($who) {\n  return \"Hello $who!\";\n}\n?>\n<p>The program says <?= hello(\"World\") ?>.</p>\n<script>\n  alert(\"And here is some JS code\"); // also colored\n</script>\n";
var _default = code;
exports.default = _default;