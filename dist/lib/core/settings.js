"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = settings;
function settings(options) {
  var self = this;
  if (!options) {
    return self._settings;
  }
  self._settings = options;
  return this;
}