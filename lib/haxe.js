"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "import one.two.Three;\n\n@attr(\"test\")\nclass Foo<T> extends Three\n{\n  public function new()\n  {\n    noFoo = 12;\n  }\n    \n  public static inline function doFoo(obj:{k:Int, l:Float}):Int\n  {\n    for(i in 0...10)\n    {\n      obj.k++;\n      trace(i);\n      var var1 = new Array();\n      if(var1.length > 1)\n        throw \"Error\";\n    }\n    // The following line should not be colored, the variable is scoped out\n    var1;\n    /* Multi line\n     * Comment test\n     */\n    return obj.k;\n  }\n  private function bar():Void\n  {\n    #if flash\n    var t1:String = \"1.21\";\n    #end\n    try {\n      doFoo({k:3, l:1.2});\n    }\n    catch (e : String) {\n      trace(e);\n    }\n    var t2:Float = cast(3.2);\n    var t3:haxe.Timer = new haxe.Timer();\n    var t4 = {k:Std.int(t2), l:Std.parseFloat(t1)};\n    var t5 = ~/123+.*$/i;\n    doFoo(t4);\n    untyped t1 = 4;\n    bob = new Foo<Int>\n  }\n  public var okFoo(default, never):Float;\n  var noFoo(getFoo, null):Int;\n  function getFoo():Int {\n    return noFoo;\n  }\n    \n  public var three:Int;\n}\nenum Color\n{\n  red;\n  green;\n  blue;\n  grey( v : Int );\n  rgb (r:Int,g:Int,b:Int);\n}\n\n";
var _default = code;
exports.default = _default;