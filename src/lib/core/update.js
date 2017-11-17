export default function update(model, id, json, callback) {
  this.call_kw(model, 'write', [ [id], json ], {}, function (err, resp) {
    let result = false
    if (!err) {
      result = resp.body.result ? resp.body.result : false
    }
    if (callback) {
      callback(err, result)
    }
  })
}
