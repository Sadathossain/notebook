"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "\" \n    This is a test of the Smalltalk code\n\"\nSeaside.WAComponent subclass: #MyCounter [\n    | count |\n    MyCounter class >> canBeRoot [ ^true ]\n\n    initialize [\n        super initialize.\n        count := 0.\n    ]\n    states [ ^{ self } ]\n    renderContentOn: html [\n        html heading: count.\n        html anchor callback: [ count := count + 1 ]; with: '++'.\n        html space.\n        html anchor callback: [ count := count - 1 ]; with: '--'.\n    ]\n]\n\nMyCounter registerAsApplication: 'mycounter'\n";
var _default = code;
exports.default = _default;