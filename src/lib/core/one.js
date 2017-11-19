export default function one(model, id, kwargs, callback) {
  this.read(model, [id], kwargs, function (err, resp) {
    if (callback) {
      let result = (Array.isArray(resp) && resp.length > 0) ? resp[0] : {}
      callback(err, result)
    }
  })
}
