"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "model BouncingBall\n  parameter Real e = 0.7;\n  parameter Real g = 9.81;\n  Real h(start=1);\n  Real v;\n  Boolean flying(start=true);\n  Boolean impact;\n  Real v_new;\nequation\n  impact = h <= 0.0;\n  der(v) = if flying then -g else 0;\n  der(h) = v;\n  when {h <= 0.0 and v <= 0.0, impact} then\n    v_new = if edge(impact) then -e*pre(v) else 0;\n    flying = v_new > 0;\n    reinit(v, v_new);\n  end when;\n  annotation (uses(Modelica(version=\"3.2\")));\nend BouncingBall;\n\n";
var _default = code;
exports.default = _default;