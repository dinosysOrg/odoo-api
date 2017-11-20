export default function search_read(model, domain, fields, kwargs, callback) {
  let params = Object.assign({}, kwargs)
  params.domain = domain
  params.fields = fields
  this.call_kw(model, 'search_read', [], params, function (err, resp) {
    if (callback) {
      let result = []
      if (!err) {
        result = resp.body.result ? resp.body.result : []
      }
      callback(err, result)
    }
  })
}
