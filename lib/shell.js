"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "#!/bin/bash\n\n# clone the repository\ngit clone http://github.com/garden/tree\n\n# generate HTTPS credentials\ncd tree\nopenssl genrsa -aes256 -out https.key 1024\nopenssl req -new -nodes -key https.key -out https.csr\nopenssl x509 -req -days 365 -in https.csr -signkey https.key -out https.crt\ncp https.key{,.orig}\nopenssl rsa -in https.key.orig -out https.key\n\n# start the server in HTTPS mode\ncd web\nsudo node ../server.js 443 'yes' >> ../node.log &\n\n# here is how to stop the server\nfor pid in `ps aux | grep 'node ../server.js' | awk '{print $2}'` ; do\n  sudo kill -9 $pid 2> /dev/null\ndone\n\nexit 0\n";
var _default = code;
exports.default = _default;