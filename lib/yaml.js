"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "--- # Favorite movies\n- Casablanca\n- North by Northwest\n- The Man Who Wasn't There\n--- # Shopping list\n[milk, pumpkin pie, eggs, juice]\n--- # Indented Blocks, common in YAML data files, use indentation and new lines to separate the key: value pairs\n  name: John Smith\n  age: 33\n--- # Inline Blocks, common in YAML data streams, use commas to separate the key: value pairs between braces\n{name: John Smith, age: 33}\n---\nreceipt:     Oz-Ware Purchase Invoice\ndate:        2007-08-06\ncustomer:\n    given:   Dorothy\n    family:  Gale\n\nitems:\n    - part_no:   A4786\n      descrip:   Water Bucket (Filled)\n      price:     1.47\n      quantity:  4\n\n    - part_no:   E1628\n      descrip:   High Heeled \"Ruby\" Slippers\n      size:       8\n      price:     100.27\n      quantity:  1\n\nbill-to:  &id001\n    street: |\n            123 Tornado Alley\n            Suite 16\n    city:   East Centerville\n    state:  KS\n\nship-to:  *id001\n\nspecialDelivery:  >\n    Follow the Yellow Brick\n    Road to the Emerald City.\n    Pay no attention to the\n    man behind the curtain.\n...\n\n";
var _default = code;
exports.default = _default;