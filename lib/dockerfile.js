"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "# Install Ghost blogging platform and run development environment\n#\n# VERSION 1.0.0\n\nFROM ubuntu:12.10\nMAINTAINER Amer Grgic \"amer@livebyt.es\"\nWORKDIR /data/ghost\n\n# Install dependencies for nginx installation\nRUN apt-get update\nRUN apt-get install -y python g++ make software-properties-common --force-yes\nRUN add-apt-repository ppa:chris-lea/node.js\nRUN apt-get update\n# Install unzip\nRUN apt-get install -y unzip\n# Install curl\nRUN apt-get install -y curl\n# Install nodejs & npm\nRUN apt-get install -y rlwrap\nRUN apt-get install -y nodejs \n# Download Ghost v0.4.1\nRUN curl -L https://ghost.org/zip/ghost-latest.zip -o /tmp/ghost.zip\n# Unzip Ghost zip to /data/ghost\nRUN unzip -uo /tmp/ghost.zip -d /data/ghost\n# Add custom config js to /data/ghost\nADD ./config.example.js /data/ghost/config.js\n# Install Ghost with NPM\nRUN cd /data/ghost/ && npm install --production\n# Expose port 2368\nEXPOSE 2368\n# Run Ghost\nCMD [\"npm\",\"start\"]\n\n";
var _default = code;
exports.default = _default;