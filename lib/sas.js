"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "libname foo \"/tmp/foobar\";\n%let count=1;\n\n/* Multi line\nComment\n*/\ndata _null_;\n    x=ranuni();\n    * single comment;\n    x2=x**2;\n    sx=sqrt(x);\n    if x=x2 then put \"x must be 1\";\n    else do;\n        put x=;\n    end;\nrun;\n\n/* embedded comment\n* comment;\n*/\n\nproc glm data=sashelp.class;\n    class sex;\n    model weight = height sex;\nrun;\n\nproc sql;\n    select count(*)\n    from sashelp.class;\n\n    create table foo as\n    select * from sashelp.class;\n\n    select *\n    from foo;\nquit;\n";
var _default = code;
exports.default = _default;