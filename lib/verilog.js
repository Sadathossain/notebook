"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "// Literals\n1'b0\n1'bx\n1'bz\n16'hDC78\n'hdeadbeef\n'b0011xxzz\n1234\n32'd5678\n3.4e6\n-128.7\n\n// Macro definition\n`define BUS_WIDTH = 8;\n\n// Module definition\nmodule block(\n  input                   clk,\n  input                   rst_n,\n  input  [`BUS_WIDTH-1:0] data_in,\n  output [`BUS_WIDTH-1:0] data_out\n);\n  \n  always @(posedge clk or negedge rst_n) begin\n\n    if (~rst_n) begin\n      data_out <= 8'b0;\n    end else begin\n      data_out <= data_in;\n    end\n    \n    if (~rst_n)\n      data_out <= 8'b0;\n    else\n      data_out <= data_in;\n    \n    if (~rst_n)\n      begin\n        data_out <= 8'b0;\n      end\n    else\n      begin\n        data_out <= data_in;\n      end\n\n  end\n  \nendmodule\n\n// Class definition\nclass test;\n\n  /**\n   * Sum two integers\n   */\n  function int sum(int a, int b);\n    int result = a + b;\n    string msg = $sformatf(\"%d + %d = %d\", a, b, result);\n    $display(msg);\n    return result;\n  endfunction\n  \n  task delay(int num_cycles);\n    repeat(num_cycles) #1;\n  endtask\n  \nendclass\n\n\n";
var _default = code;
exports.default = _default;