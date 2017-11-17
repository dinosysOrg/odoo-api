'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = call_kw;
function call_kw(model, method, args) {
  var kwargs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var callback = arguments[4];

  kwargs['context'] = this._session.context;
  var params = { model: model, method: method, args: args, kwargs: kwargs };
  this.post(this.settings().url, '/web/dataset/call_kw', params, this._session.cookie, function (err, resp) {
    if (callback) {
      callback(err, resp);
    }
  });
}