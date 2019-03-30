"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "{% extends \"layout.twig\" %}\n{% block title %}CodeMirror: Twig mode{% endblock %}\n{# this is a comment #}\n{% block content %}\n  {% for foo in bar if foo.baz is divisible by(3) %}\n    Hello {{ foo.world }}\n  {% else %}\n    {% set msg = \"Result not found\" %}\n    {% include \"empty.twig\" with { message: msg } %}\n  {% endfor %}\n{% endblock %}\n\n";
var _default = code;
exports.default = _default;