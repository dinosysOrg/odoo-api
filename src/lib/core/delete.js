export default function del(model, ids, callback) {
  this.call_kw(model, 'unlink', [ids], {}, function (err, resp) {
    let result = false
    if (!err) {
      result = resp.body.result ? resp.body.result : false
    }
    if (callback) {
      callback(err, result)
    }
  })
}
