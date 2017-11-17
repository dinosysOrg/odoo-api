export default function name_get(model, ids, kwargs, callback) {
  this.call_kw(model, 'name_get', [ids], kwargs, function (err, resp) {
    let result = []
    if (!err) {
      result = resp.body.result ? resp.body.result : []
    }
    if (callback) {
      callback(err, result)
    }
  })
}
