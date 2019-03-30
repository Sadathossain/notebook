"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "\nimport numpy as np\ncimport cython\nfrom libc.math cimport sqrt\n\n@cython.boundscheck(False)\n@cython.wraparound(False)\ndef pairwise_cython(double[:, ::1] X):\n    cdef int M = X.shape[0]\n    cdef int N = X.shape[1]\n    cdef double tmp, d\n    cdef double[:, ::1] D = np.empty((M, M), dtype=np.float64)\n    for i in range(M):\n        for j in range(M):\n            d = 0.0\n            for k in range(N):\n                tmp = X[i, k] - X[j, k]\n                d += tmp * tmp\n            D[i, j] = sqrt(d)\n    return np.asarray(D)\n";
var _default = code;
exports.default = _default;