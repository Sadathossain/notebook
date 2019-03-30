"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "// Prime Sieve in Go.\n// Taken from the Go specification.\n// Copyright \xA9 The Go Authors.\n\npackage main\n\nimport \"fmt\"\n\n// Send the sequence 2, 3, 4, ... to channel 'ch'.\nfunc generate(ch chan<- int) {\n  for i := 2; ; i++ {\n    ch <- i  // Send 'i' to channel 'ch'\n  }\n}\n\n// Copy the values from channel 'src' to channel 'dst',\n// removing those divisible by 'prime'.\nfunc filter(src <-chan int, dst chan<- int, prime int) {\n  for i := range src {    // Loop over values received from 'src'.\n    if i%prime != 0 {\n      dst <- i  // Send 'i' to channel 'dst'.\n    }\n  }\n}\n\n// The prime sieve: Daisy-chain filter processes together.\nfunc sieve() {\n  ch := make(chan int)  // Create a new channel.\n  go generate(ch)       // Start generate() as a subprocess.\n  for {\n    prime := <-ch\n    fmt.Print(prime, \"\\n\")\n    ch1 := make(chan int)\n    go filter(ch, ch1, prime)\n    ch = ch1\n  }\n}\n\nfunc main() {\n  sieve()\n}\n\n";
var _default = code;
exports.default = _default;