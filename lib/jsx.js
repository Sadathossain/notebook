"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "import React from 'react';\nimport styles from './index.less';\n\nconst Select = ({ value, options, onChange }) => {\n  return (\n    <select className={styles.select} value={value} onChange={onChange}>\n      {options.map((item, key) => {\n        const optionProps = { key };\n        if (value === item) {\n          optionProps.value = item;\n        }\n        return (\n          <option {...optionProps}> {item} </option>\n        );\n      })}\n    </select>\n  );\n};\n\nexport default Select;\n";
var _default = code;
exports.default = _default;