"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "LIBRARY ieee;\nUSE ieee.std_logic_1164.ALL;\nUSE ieee.numeric_std.ALL;\n\nENTITY tb IS\nEND tb;\n\nARCHITECTURE behavior OF tb IS\n   --Inputs\n   signal a : unsigned(2 downto 0) := (others => '0');\n   signal b : unsigned(2 downto 0) := (others => '0');\n    --Outputs\n   signal a_eq_b : std_logic;\n   signal a_le_b : std_logic;\n   signal a_gt_b : std_logic;\n\n    signal i,j : integer;\n\nBEGIN\n\n    -- Instantiate the Unit Under Test (UUT)\n   uut: entity work.comparator PORT MAP (\n          a => a,\n          b => b,\n          a_eq_b => a_eq_b,\n          a_le_b => a_le_b,\n          a_gt_b => a_gt_b\n        );\n\n   -- Stimulus process\n   stim_proc: process\n   begin\n        for i in 0 to 8 loop\n            for j in 0 to 8 loop\n                a <= to_unsigned(i,3); --integer to unsigned type conversion\n                b <= to_unsigned(j,3);\n                wait for 10 ns;\n            end loop;\n        end loop;\n   end process;\n\nEND;\n\n";
var _default = code;
exports.default = _default;