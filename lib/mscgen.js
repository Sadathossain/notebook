"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "# Sample mscgen program\n# See http://www.mcternan.me.uk/mscgen or\n# https://sverweij.github.io/mscgen_js for more samples\nmsc {\n  # options\n  hscale=\"1.2\";\n\n  # entities/ lifelines\n  a [label=\"Entity A\"],\n  b [label=\"Entity B\", linecolor=\"red\", arclinecolor=\"red\", textbgcolor=\"pink\"],\n  c [label=\"Entity C\"];\n\n  # arcs/ messages\n  a => c [label=\"doSomething(args)\"];\n  b => c [label=\"doSomething(args)\"];\n  c >> * [label=\"everyone asked me\", arcskip=\"1\"];\n  c =>> c [label=\"doing something\"];\n  c -x * [label=\"report back\", arcskip=\"1\"];\n  |||;\n  --- [label=\"shows's over, however ...\"];\n  b => a [label=\"did you see c doing something?\"];\n  a -> b [label=\"nope\"];\n  b :> a [label=\"shall we ask again?\"];\n  a => b [label=\"naah\"];\n  ...;\n}\n\n";
var _default = code;
exports.default = _default;