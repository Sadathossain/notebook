"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = ";; Example IDL code\nFUNCTION mean_and_stddev,array\n  ;; This program reads in an array of numbers\n  ;; and returns a structure containing the\n  ;; average and standard deviation\n\n  ave = 0.0\n  count = 0.0\n\n  for i=0,N_ELEMENTS(array)-1 do begin\n      ave = ave + array[i]\n      count = count + 1\n  endfor\n  \n  ave = ave/count\n\n  std = stddev(array)  \n\n  return, {average:ave,std:std}\n\nEND\n\n    \n";
var _default = code;
exports.default = _default;