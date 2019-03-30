"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "{namespace example}\n\n/**\n * Says hello to the world.\n */\n{template .helloWorld}\n  {@param name: string}\n  {@param? score: number}\n  Hello <b>{$name}</b>!\n  <div>\n    {if $score}\n      <em>{$score} points</em>\n    {else}\n      no score\n    {/if}\n  </div>\n{/template}\n\n{template .alertHelloWorld kind=\"js\"}\n  alert('Hello World');\n{/template}\n\n";
var _default = code;
exports.default = _default;