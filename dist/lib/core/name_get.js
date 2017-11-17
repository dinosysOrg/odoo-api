'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = name_get;
function name_get(model, ids, kwargs, callback) {
  this.call_kw(model, 'name_get', [ids], kwargs, function (err, resp) {
    var result = [];
    if (!err) {
      result = resp.body.result ? resp.body.result : [];
    }
    if (callback) {
      callback(err, result);
    }
  });
}