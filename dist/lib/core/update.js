'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;
function update(model, id, json, callback) {
  this.call_kw(model, 'write', [[id], json], {}, function (err, resp) {
    var result = false;
    if (!err) {
      result = resp.body.result ? resp.body.result : false;
    }
    if (callback) {
      callback(err, result);
    }
  });
}