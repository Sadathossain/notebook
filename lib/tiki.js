"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "Headings\n!Header 1\n!!Header 2\n!!!Header 3\n!!!!Header 4\n!!!!!Header 5\n!!!!!!Header 6\n\nStyling\n-=titlebar=-\n^^ Box on multi\nlines\nof content^^\n__bold__\n''italic''\n===underline===\n::center::\n--Line Through--\n\nOperators\n~np~No parse~/np~\n\nLink\n[link|desc|nocache]\n\nWiki\n((Wiki))\n((Wiki|desc))\n((Wiki|desc|timeout))\n\nTable\n||row1 col1|row1 col2|row1 col3\nrow2 col1|row2 col2|row2 col3\nrow3 col1|row3 col2|row3 col3||\n\nLists:\n*bla\n**bla-1\n++continue-bla-1\n***bla-2\n++continue-bla-1\n*bla\n+continue-bla\n#bla\n** tra-la-la\n+continue-bla\n#bla\n\nPlugin (standard):\n{PLUGIN(attr=\"my attr\")}\nPlugin Body\n{PLUGIN}\n\nPlugin (inline):\n{plugin attr=\"my attr\"}\n\n";
var _default = code;
exports.default = _default;