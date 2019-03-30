"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "(* example Mathematica code *)\n(* Dualisiert wird anhand einer Polarit\xE4t an einer\n   Quadrik $x^t Q x = 0$ mit regul\xE4rer Matrix $Q$ (also\n   mit $det(Q) \neq 0$), z.B. die Identit\xE4tsmatrix.\n   $p$ ist eine Liste von Polynomen - ein Ideal. *)\ndualize::\"singular\" = \"Q must be regular: found Det[Q]==0.\";\ndualize[ Q_, p_ ] := Block[\n    { m, n, xv, lv, uv, vars, polys, dual },\n    If[Det[Q] == 0,\n      Message[dualize::\"singular\"],\n      m = Length[p];\n      n = Length[Q] - 1;\n      xv = Table[Subscript[x, i], {i, 0, n}];\n      lv = Table[Subscript[l, i], {i, 1, m}];\n      uv = Table[Subscript[u, i], {i, 0, n}];\n      (* Konstruiere Ideal polys. *)\n      If[m == 0,\n        polys = Q.uv,\n        polys = Join[p, Q.uv - Transpose[Outer[D, p, xv]].lv]\n        ];\n      (* Eliminiere die ersten n + 1 + m Variablen xv und lv\n         aus dem Ideal polys. *)\n      vars = Join[xv, lv];\n      dual = GroebnerBasis[polys, uv, vars];\n      (* Ersetze u mit x im Ergebnis. *)\n      ReplaceAll[dual, Rule[u, x]]\n      ]\n    ]\n\n";
var _default = code;
exports.default = _default;