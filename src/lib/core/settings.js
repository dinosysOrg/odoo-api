export default function settings(options) {
  let self = this
  if (!options) {
    return self._settings
  }
  self._settings = options
  return this
}
