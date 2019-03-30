"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "<!doctype html>\n<html>\n  <head>\n    <title>My Tornado web application</title>\n  </head>\n  <body>\n    <h1>\n      {{ title }}\n    </h1>\n    <ul class=\"my-list\">\n      {% for item in items %}\n        <li>{% item.name %}</li>\n      {% empty %}\n        <li>You have no items in your list.</li>\n      {% end %}\n    </ul>\n  </body>\n</html>\n\n";
var _default = code;
exports.default = _default;