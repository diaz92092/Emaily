// keys.js - figure out what set of keys to return

if (process.env.NODE_ENV === "production") {
  // we are in production - return the production set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the development set of keys
  module.exports = require("./dev");
}
