export default function call_kw(model, method, args, kwargs={}, callback) {
    kwargs['context'] = this._session.context;
    let params = { model: model, method: method, args: args, kwargs: kwargs };
    this.post(this.settings().url, '/web/dataset/call_kw', params, this._session.cookie, function (err, resp) {
      if (callback) {
        callback(err, resp)
      }
    })
}
