"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "// example yacas code\nGraph(edges_IsList) <-- [\n    Local(v, e, f, t);\n\n    vertices := {};\n\n    ForEach (e, edges) [\n        If (IsList(e), e := Head(e));\n        {f, t} := Tail(Listify(e));\n\n        DestructiveAppend(vertices, f);\n        DestructiveAppend(vertices, t);\n    ];\n\n    Graph(RemoveDuplicates(vertices), edges);\n];\n\n10 # IsGraph(Graph(vertices_IsList, edges_IsList)) <-- True;\n20 # IsGraph(_x) <-- False;\n\nEdges(Graph(vertices_IsList, edges_IsList)) <-- edges;\nVertices(Graph(vertices_IsList, edges_IsList)) <-- vertices;\n\nAdjacencyList(g_IsGraph) <-- [\n    Local(l, vertices, edges, e, op, f, t);\n\n    l := Association'Create();\n\n    vertices := Vertices(g);\n    ForEach (v, vertices)\n        Association'Set(l, v, {});\n\n    edges := Edges(g);\n\n    ForEach(e, edges) [\n        If (IsList(e), e := Head(e));\n        {op, f, t} := Listify(e);\n        DestructiveAppend(Association'Get(l, f), t);\n        If (String(op) = \"<->\", DestructiveAppend(Association'Get(l, t), f));\n    ];\n\n    l;\n];\n\n";
var _default = code;
exports.default = _default;