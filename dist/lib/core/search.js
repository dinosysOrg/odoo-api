'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
//search for given model and return list of ids
function search(model, domain, kwargs, callback) {
  this.call_kw(model, 'search', [domain], kwargs, function (err, resp) {
    var result = [];
    if (!err) {
      result = resp.body.result ? resp.body.result : [];
    }
    if (callback) {
      callback(err, result);
    }
  });
}