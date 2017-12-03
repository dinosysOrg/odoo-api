'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search_read;
function search_read(model, domain, fields, kwargs, callback) {
  var params = Object.assign({}, kwargs);
  params.domain = domain;
  params.fields = fields;
  this.call_kw(model, 'search_read', [], params, function (err, resp) {
    if (callback) {
      var result = [];
      if (!err) {
        result = resp.body.result ? resp.body.result : [];
      }
      callback(err, result);
    }
  });
}