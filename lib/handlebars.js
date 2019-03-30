"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "{{> breadcrumbs}}\n{{!--\n  You can use the t function to get\n  content translated to the current locale, es:\n  {{t 'article_list'}}\n--}}\n\n<h1>{{t 'article_list'}}</h1>\n\n{{! one line comment }}\n\n{{#each articles}}\n  {{~title}}\n  <p>{{excerpt body size=120 ellipsis=true}}</p>\n\n  {{#with author}}\n    written by {{first_name}} {{last_name}}\n    from category: {{../category.title}}\n    {{#if @../last}}foobar!{{/if}}\n  {{/with~}}\n\n  {{#if promoted.latest}}Read this one! {{else}} This is ok! {{/if}}\n\n  {{#if @last}}<hr>{{/if}}\n{{/each}}\n\n{{#form new_comment}}\n  <input type=\"text\" name=\"body\">\n{{/form}}\n";
var _default = code;
exports.default = _default;