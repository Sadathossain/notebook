"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "--[[\nexample useless code to show lua syntax highlighting\nthis is multiline comment\n]]\n\nfunction blahblahblah(x)\n\n  local table = {\n    \"asd\" = 123,\n    \"x\" = 0.34,  \n  }\n  if x ~= 3 then\n    print( x )\n  elseif x == \"string\"\n    my_custom_function( 0x34 )\n  else\n    unknown_function( \"some string\" )\n  end\n\n  --single line comment\n  \nend\n\nfunction blablabla3()\n\n  for k,v in ipairs( table ) do\n    --abcde..\n    y=[=[\n  x=[[\n      x is a multi line string\n   ]]\n  but its definition is iside a highest level string!\n  ]=]\n    print(\" \\\"\\\" \")\n\n    s = math.sin( x )\n  end\n\nend\n\n";
var _default = code;
exports.default = _default;