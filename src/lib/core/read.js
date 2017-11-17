export default function read(model, ids, kwargs, callback) {
  this.call_kw(model, 'read', [ids], kwargs, function (err, resp) {
    let result = []
    if (!err) {
      result = resp.body.result ? resp.body.result : []
    }
    if (callback) {
      callback(err, result)
    }
  })
}
