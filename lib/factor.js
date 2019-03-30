"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "! Copyright (C) 2008 Slava Pestov.\n! See http://factorcode.org/license.txt for BSD license.\n\n! A simple time server\n\nUSING: accessors calendar calendar.format io io.encodings.ascii\nio.servers kernel threads ;\nIN: time-server\n\n: handle-time-client ( -- )\n    now timestamp>rfc822 print ;\n\n: <time-server> ( -- threaded-server )\n    ascii <threaded-server>\n        \"time-server\" >>name\n        1234 >>insecure\n        [ handle-time-client ] >>handler ;\n\n: start-time-server ( -- )\n    <time-server> start-server drop ;\n\nMAIN: start-time-server\n\n";
var _default = code;
exports.default = _default;