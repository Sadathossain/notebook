"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "-------------------------------------------------------------------\nTue Oct 18 13:58:40 UTC 2011 - misterx@example.com\n\n- Update to r60.3\n- Fixes bug in the reflect package\n  * disallow Interface method on Value obtained via unexported name\n\n-------------------------------------------------------------------\nThu Oct  6 08:14:24 UTC 2011 - misterx@example.com\n\n- Update to r60.2\n- Fixes memory leak in certain map types\n\n-------------------------------------------------------------------\nWed Oct  5 14:34:10 UTC 2011 - misterx@example.com\n\n- Tweaks for gdb debugging\n- go.spec changes:\n  - move %go_arch definition to %prep section\n  - pass correct location of go specific gdb pretty printer and\n    functions to cpp as HOST_EXTRA_CFLAGS macro\n  - install go gdb functions & printer\n- gdb-printer.patch\n  - patch linker (src/cmd/ld/dwarf.c) to emit correct location of go\n    gdb functions and pretty printer\n\n";
var _default = code;
exports.default = _default;