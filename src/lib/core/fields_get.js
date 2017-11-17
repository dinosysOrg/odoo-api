export default function fields_get(model, fields=[], attributes={}, callback) {
  this.call_kw(model, 'fields_get', [ fields ], attributes, function (err, resp) {
    let result = {}
    if (!err) {
      result = resp.body.result ? resp.body.result : {}
    }
    if (callback) {
      callback(err, result)
    }
  })
}
