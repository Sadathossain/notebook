"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "body\n  table\n    - for user in users\n      td id=\"user_#{user.id}\" class=user.role\n        a href=user_action(user, :edit) Edit #{user.name}\n        a href=(path_to_user user) = user.name\nbody\n  h1(id=\"logo\") = page_logo\n  h2[id=\"tagline\" class=\"small tagline\"] = page_tagline\n\nh2[id=\"tagline\"\n   class=\"small tagline\"] = page_tagline\n\nh1 id = \"logo\" = page_logo\nh2 [ id = \"tagline\" ] = page_tagline\n\n/ comment\n  second line\n/! html comment\n   second line\n<!-- html comment -->\n<a href=\"#{'hello' if set}\">link</a>\na.slim href=\"work\" disabled=false running==:atom Text <b>bold</b>\n.clazz data-id=\"test\" == 'hello' unless quark\n | Text mode #{12}\n   Second line\n= x ||= :ruby_atom\n#menu.left\n  - @env.each do |x|\n    li: a = x\n*@dyntag attr=\"val\"\n.first *{:class => [:second, :third]} Text\n.second class=[\"text\",\"more\"]\n.third class=:text,:symbol\n";
var _default = code;
exports.default = _default;