'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;
function login(callback) {
  var self = this;
  var params = { db: this._settings.db, login: this._settings.username, password: this._settings.password };
  this.post(this._settings.url, '/web/session/authenticate', params, this._session || {}, function (err, resp) {
    if (!resp.body.error) {
      var cookie = resp.headers['set-cookie'];
      if (Array.isArray(cookie)) {
        cookie = cookie[0];
      }
      self._session = {
        uid: resp.body.result.uid,
        context: resp.body.result.user_context,
        session_id: resp.body.result.session_id,
        cookie: cookie.split(';')[0]
      };
    } else {
      self._session = {};
    }
    if (callback) {
      callback(err, self._session);
    }
  });
}