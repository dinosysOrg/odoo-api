'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = post;
var request = require('superagent');

//superagent post's wrapper
function post(baseurl, method, params, cookie, callback) {
    var url = baseurl + method;
    var json = { jsonrpc: '2.0', method: 'call', params: params };
    request.post(url).send(json).set('Cookie', cookie || '').set('accept', 'json').end(callback);
}