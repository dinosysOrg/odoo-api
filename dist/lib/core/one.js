"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = one;
function one(model, id, kwargs, callback) {
  this.read(model, [id], kwargs, function (err, resp) {
    if (callback) {
      var result = Array.isArray(resp) && resp.length > 0 ? resp[0] : {};
      callback(err, result);
    }
  });
}