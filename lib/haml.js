"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "!!!\n#content\n.left.column(title=\"title\"){:href => \"/hello\", :test => \"#{hello}_#{world}\"}\n    <!-- This is a comment -->\n    %h2 Welcome to our site!\n    %p= puts \"HAML MODE\"\n  .right.column\n    = render :partial => \"sidebar\"\n\n.container\n  .row\n    .span8\n      %h1.title= @page_title\n%p.title= @page_title\n%p\n  /\n    The same as HTML comment\n    Hello multiline comment\n\n  -# haml comment\n      This wont be displayed\n      nor will this\n  Date/Time:\n  - now = DateTime.now\n  %strong= now\n  - if now > DateTime.parse(\"December 31, 2006\")\n    = \"Happy new \" + \"year!\"\n\n%title\n  = @title\n  \\= @title\n  <h1>Title</h1>\n  <h1 title=\"HELLO\">\n    Title\n  </h1>\n    \n";
var _default = code;
exports.default = _default;