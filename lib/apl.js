"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "\u235D Conway's game of life\n\n\u235D This example was inspired by the impressive demo at\n\u235D http://www.youtube.com/watch?v=a9xAKttWgP4\n\n\u235D Create a matrix:\n\u235D     0 1 1\n\u235D     1 1 0\n\u235D     0 1 0\ncreature \u2190 (3 3 \u2374 \u2373 9) \u2208 1 2 3 4 7   \u235D Original creature from demo\ncreature \u2190 (3 3 \u2374 \u2373 9) \u2208 1 3 6 7 8   \u235D Glider\n\n\u235D Place the creature on a larger board, near the centre\nboard \u2190 \xAF1 \u2296 \xAF2 \u233D 5 7 \u2191 creature\n\n\u235D A function to move from one generation to the next\nlife \u2190 {\u2228/ 1 \u2375 \u2227 3 4 = \u2282+/ +\u233F 1 0 \xAF1 \u2218.\u2296 1 0 \xAF1 \u233D\xA8 \u2282\u2375}\n\n\u235D Compute n-th generation and format it as a\n\u235D character matrix\ngen \u2190 {' #'[(life \u2363 \u2375) board]}\n\n\u235D Show first three generations\n(gen 1) (gen 2) (gen 3)\n";
var _default = code;
exports.default = _default;