export default function create(model, json, callback) {
  this.call_kw(model, 'create', [json], {}, function (err, resp) {
    let result = 0
    if (!err) {
      result = resp.body.result ? resp.body.result : 0
    }
    if (callback) {
      callback(err, result)
    }
  })
}
