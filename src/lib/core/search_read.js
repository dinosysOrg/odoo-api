export default function search_read(model, domain, kwargs, callback) {
  this.call_kw(model, 'search_read', [domain], kwargs, function (err, resp) {
    if (callback) {
      let result = []
      if (!err) {
        result = resp.body.result ? resp.body.result : []
      }
      callback(err, result)
    }
  })
}
