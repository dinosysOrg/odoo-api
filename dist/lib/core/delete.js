'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = del;
function del(model, ids, callback) {
  this.call_kw(model, 'unlink', [ids], {}, function (err, resp) {
    var result = false;
    if (!err) {
      result = resp.body.result ? resp.body.result : false;
    }
    if (callback) {
      callback(err, result);
    }
  });
}