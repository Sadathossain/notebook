"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "import com.demo.util.MyType;\nimport com.demo.util.MyInterface;\n\npublic enum Enum {\n  VAL1, VAL2, VAL3\n}\n\npublic class Class<T, V> implements MyInterface {\n  public static final MyType<T, V> member;\n  \n  private class InnerClass {\n    public int zero() {\n      return 0;\n    }\n  }\n\n  @Override\n  public MyType method() {\n    return member;\n  }\n\n  public void method2(MyType<T, V> value) {\n    method();\n    value.method3();\n    member = value;\n  }\n}\n";
var _default = code;
exports.default = _default;