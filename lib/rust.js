"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "// Demo code.\n\ntype foo<T> = int;\nenum bar {\n    some(int, foo<float>),\n    none\n}\n\nfn check_crate(x: int) {\n    let v = 10;\n    match foo {\n        1 ... 3 {\n            print_foo();\n            if x {\n                blah().to_string();\n            }\n        }\n        (x, y) { \"bye\" }\n        _ { \"hi\" }\n    }\n}\n";
var _default = code;
exports.default = _default;