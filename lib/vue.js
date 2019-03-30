"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "<template>\n  <div class=\"sass\">Im am a {{mustache-like}} template</div>\n</template>\n\n<script lang=\"coffee\">\n  module.exports =\n    props: ['one', 'two', 'three']\n</script>\n\n<style lang=\"sass\">\n.sass\n  font-size: 18px\n</style>\n";
var _default = code;
exports.default = _default;