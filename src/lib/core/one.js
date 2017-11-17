export default function one(model, id, callback) {
  this.read(model, [id], {}, function (err, resp) {
    if (callback) {
      let result = (Array.isArray(resp) && resp.length > 0) ? resp[0] : {}
      callback(err, result)
    }
  })
}
