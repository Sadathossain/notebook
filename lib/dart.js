"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "import 'dart:math' show Random;\n\nvoid main() {\n  print(new Die(n: 12).roll());\n}\n\n// Define a class.\nclass Die {\n  // Define a class variable.\n  static Random shaker = new Random();\n\n  // Define instance variables.\n  int sides, value;\n\n  // Define a method using shorthand syntax.\n  String toString() => '$value';\n\n  // Define a constructor.\n  Die({int n: 6}) {\n    if (4 <= n && n <= 20) {\n      sides = n;\n    } else {\n      // Support for errors and exceptions.\n      throw new ArgumentError(/* */);\n    }\n  }\n\n  // Define an instance method.\n  int roll() {\n    return value = shaker.nextInt(sides) + 1;\n  }\n}\n";
var _default = code;
exports.default = _default;