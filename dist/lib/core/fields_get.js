'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fields_get;
function fields_get(model) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var callback = arguments[3];

  this.call_kw(model, 'fields_get', [fields], attributes, function (err, resp) {
    var result = {};
    if (!err) {
      result = resp.body.result ? resp.body.result : {};
    }
    if (callback) {
      callback(err, result);
    }
  });
}