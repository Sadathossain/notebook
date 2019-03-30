"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "//Pattern for groovy script\ndef p = ~/.*\\.groovy/\nnew File( 'd:\\scripts' ).eachFileMatch(p) {f ->\n  // imports list\n  def imports = []\n  f.eachLine {\n    // condition to detect an import instruction\n    ln -> if ( ln =~ '^import .*' ) {\n      imports << \"${ln - 'import '}\"\n    }\n  }\n  // print thmen\n  if ( ! imports.empty ) {\n    println f\n    imports.each{ println \"   $it\" }\n  }\n}\n\n/* Coin changer demo code from http://groovy.codehaus.org */\n\nenum UsCoin {\n  quarter(25), dime(10), nickel(5), penny(1)\n  UsCoin(v) { value = v }\n  final value\n}\n\nenum OzzieCoin {\n  fifty(50), twenty(20), ten(10), five(5)\n  OzzieCoin(v) { value = v }\n  final value\n}\n\ndef plural(word, count) {\n  if (count == 1) return word\n  word[-1] == 'y' ? word[0..-2] + \"ies\" : word + \"s\"\n}\n\ndef change(currency, amount) {\n  currency.values().inject([]){ list, coin ->\n     int count = amount / coin.value\n     amount = amount % coin.value\n     list += \"$count ${plural(coin.toString(), count)}\"\n  }\n}\n\n";
var _default = code;
exports.default = _default;