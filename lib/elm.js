"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "import Color exposing (..)\nimport Graphics.Collage exposing (..)\nimport Graphics.Element exposing (..)\nimport Time exposing (..)\n\nmain =\n  Signal.map clock (every second)\n\nclock t =\n  collage 400 400\n    [ filled    lightGrey   (ngon 12 110)\n    , outlined (solid grey) (ngon 12 110)\n    , hand orange   100  t\n    , hand charcoal 100 (t/60)\n    , hand charcoal 60  (t/720)\n    ]\n\nhand clr len time =\n  let angle = degrees (90 - 6 * inSeconds time)\n  in\n      segment (0,0) (fromPolar (len,angle))\n        |> traced (solid clr)\n\n";
var _default = code;
exports.default = _default;