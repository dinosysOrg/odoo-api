const request = require('superagent');

//superagent post's wrapper
export default function post (baseurl, method, params, cookie, callback) {
    let url = baseurl + method
    let json = { jsonrpc: '2.0', method: 'call', params: params }
    request.post(url).send(json)
    .set('Cookie', cookie || '').set('accept', 'json').end(callback);
}
