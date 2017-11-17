//search for given model and return list of ids
export default function search (model, domain, kwargs, callback) {
  this.call_kw(model, 'search', [domain], kwargs, function (err, resp) {
    let result = []
    if (!err) {
      result = resp.body.result ? resp.body.result : []
    }
    if (callback) {
      callback(err, result)
    }
  })
}
