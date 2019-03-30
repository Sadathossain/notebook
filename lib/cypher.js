"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "// Cypher Mode for CodeMirror, using the neo theme\nMATCH (joe { name: 'Joe' })-[:knows*2..2]-(friend_of_friend)\nWHERE NOT (joe)-[:knows]-(friend_of_friend)\nRETURN friend_of_friend.name, COUNT(*)\nORDER BY COUNT(*) DESC , friend_of_friend.name\n\n";
var _default = code;
exports.default = _default;