"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "@prefix foaf: <http://xmlns.com/foaf/0.1/> .\n@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n\n<http://purl.org/net/bsletten> \n    a foaf:Person;\n    foaf:interest <http://www.w3.org/2000/01/sw/>;\n    foaf:based_near [\n        geo:lat \"34.0736111\" ;\n        geo:lon \"-118.3994444\"\n   ]\n\n\n";
var _default = code;
exports.default = _default;