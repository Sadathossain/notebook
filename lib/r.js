"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "X <- list(height = 5.4, weight = 54)\ncat(\"Printing objects: \"); print(X)\nprint(\"Accessing individual elements:\")\ncat(sprintf(\"Your height is %s and your weight is %s\n\", X$height, X$weight))\n\n# Functions:\nsquare <- function(x) {\n  return(x * x)\n}\ncat(sprintf(\"The square of 3 is %s\n\", square(3)))\n\n# In R, the last expression in a function is, by default, what is\n# returned. The idiomatic way to write the function is:\nsquare <- function(x) {\n  x * x\n}\n# or, for functions with short content:\nsquare <- function(x) x * x\n\n# Function arguments with default values:\ncube <- function(x = 5) x * x * x\ncat(sprintf(\"Calling cube with 2 : %s\n\", cube(2))  # will give 2^3\ncat(sprintf(\"Calling cube        : %s\n\", cube())   # will default to 5^3.\n\npowers <- function(x) list(x2 = x*x, x3 = x*x*x, x4 = x*x*x*x)\n\ncat(\"Powers of 3: \"); print(powers(3))\n\n# Data frames\ndf <- data.frame(letters = letters[1:5], '#letter' = 1:5)\nprint(df$letters)\nprint(df$`#letter`)\n\n# Operators:\nm1 <- matrix(1:6, 2, 3)\nm2 <- m1 %*% t(m1)\ncat(\"Matrix product: \"); print(m2)\n\n# Assignments:\na <- 1\nb <<- 2\nc = 3\n4 -> d\n5 ->> e\n\n";
var _default = code;
exports.default = _default;