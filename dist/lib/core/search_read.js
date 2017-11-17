'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search_read;
function search_read(model, domain, kwargs, callback) {
  this.call_kw(model, 'search_read', [domain], kwargs, function (err, resp) {
    if (callback) {
      var result = [];
      if (!err) {
        result = resp.body.result ? resp.body.result : [];
      }
      callback(err, result);
    }
  });
}