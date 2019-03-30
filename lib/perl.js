"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "#!/usr/bin/perl\n\nuse Something qw(func1 func2);\n\n# strings\nmy $s1 = qq'single line';\nour $s2 = q(multi-\n              line);\n\n=item Something\n  Example.\n=cut\n\nmy $html=<<'HTML'\n<html>\n<title>hi!</title>\n</html>\nHTML\n\nprint \"first,\".join(',', 'second', qq~third~);\n\nif($s1 =~ m[(?<!\\s)(l.ne)\\z]o) {\n  $h->{$1}=$$.' predefined variables';\n  $s2 =~ s/\\-line//ox;\n  $s1 =~ s[\n      line ]\n    [\n      block\n    ]ox;\n}\n\n1; # numbers and comments\n\n__END__\nsomething...\n\n\n";
var _default = code;
exports.default = _default;