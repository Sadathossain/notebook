"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "# This is a TOML document. Boom.\n\ntitle = \"TOML Example\"\n\n[owner]\nname = \"Tom Preston-Werner\"\norganization = \"GitHub\"\nbio = \"GitHub Cofounder & CEO\nLikes tater tots and beer.\"\ndob = 1979-05-27T07:32:00Z # First class dates? Why not?\n\n[database]\nserver = \"192.168.1.1\"\nports = [ 8001, 8001, 8002 ]\nconnection_max = 5000\nenabled = true\n\n[servers]\n\n  # You can indent as you please. Tabs or spaces. TOML don't care.\n  [servers.alpha]\n  ip = \"10.0.0.1\"\n  dc = \"eqdc10\"\n  \n  [servers.beta]\n  ip = \"10.0.0.2\"\n  dc = \"eqdc10\"\n  \n[clients]\ndata = [ [\"gamma\", \"delta\"], [1, 2] ]\n\n# Line breaks are OK when inside arrays\nhosts = [\n  \"alpha\",\n  \"omega\"\n]\n";
var _default = code;
exports.default = _default;