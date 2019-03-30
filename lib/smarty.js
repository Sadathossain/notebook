"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "{extends file=\"parent.tpl\"}\n{include file=\"template.tpl\"}\n\n{* some example Smarty content *}\n{if isset($name) && $name == 'Blog'}\n  This is a {$var}.\n  {$integer = 451}, {$array[] = \"a\"}, {$stringvar = \"string\"}\n  {assign var='bob' value=$var.prop}\n{elseif $name == $foo}\n  {function name=menu level=0}\n    {foreach $data as $entry}\n      {if is_array($entry)}\n        - {$entry@key}\n        {menu data=$entry level=$level+1}\n      {else}\n        {$entry}\n      {/if}\n    {/foreach}\n  {/function}\n{/if}\n";
var _default = code;
exports.default = _default;