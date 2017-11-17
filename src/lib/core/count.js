export default function count(model, domain, kwargs, callback) {
    this.call_kw(model, 'search_count', [domain], kwargs, function (err, resp) {
      if (callback) {
        callback(err, resp.body.result ? resp.body.result : 0)
      }
    })
}
