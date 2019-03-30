"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "#\n# Example Sieve Filter\n# Declare any optional features or extension used by the script\n#\n\nrequire [\"fileinto\", \"reject\"];\n\n#\n# Reject any large messages (note that the four leading dots get\n# \"stuffed\" to three)\n#\nif size :over 1M\n{\n  reject text:\nPlease do not send me large attachments.\nPut your file on a server and send me the URL.\nThank you.\n.... Fred\n.\n;\n  stop;\n}\n\n#\n# Handle messages from known mailing lists\n# Move messages from IETF filter discussion list to filter folder\n#\nif header :is \"Sender\" \"owner-ietf-mta-filters@imc.org\"\n{\n  fileinto \"filter\";  # move to \"filter\" folder\n}\n#\n# Keep all messages to or from people in my company\n#\nelsif address :domain :is [\"From\", \"To\"] \"example.com\"\n{\n  keep;               # keep in \"In\" folder\n}\n\n#\n# Try and catch unsolicited email.  If a message is not to me,\n# or it contains a subject known to be spam, file it away.\n#\nelsif anyof (not address :all :contains\n               [\"To\", \"Cc\", \"Bcc\"] \"me@example.com\",\n             header :matches \"subject\"\n               [\"*make*money*fast*\", \"*university*dipl*mas*\"])\n{\n  # If message header does not contain my address,\n  # it's from a list.\n  fileinto \"spam\";   # move to \"spam\" folder\n}\nelse\n{\n  # Move all other (non-company) mail to \"personal\"\n  # folder.\n  fileinto \"personal\";\n}\n";
var _default = code;
exports.default = _default;