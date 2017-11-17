'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = read_group;
function read_group(model, domain, fields, groupby, kwargs, callback) {
  this.call_kw(model, 'read_group', [domain, fields, groupby], kwargs, function (err, resp) {
    var result = [];
    if (!err) {
      result = resp.body.result ? resp.body.result : [];
    }
    if (callback) {
      callback(err, result);
    }
  });
}