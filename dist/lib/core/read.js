'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = read;
function read(model, ids, kwargs, callback) {
  this.call_kw(model, 'read', [ids], kwargs, function (err, resp) {
    var result = [];
    if (!err) {
      result = resp.body.result ? resp.body.result : [];
    }
    if (callback) {
      callback(err, result);
    }
  });
}