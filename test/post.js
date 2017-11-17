//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'
const { url, db, username, password } = options

describe('Test post method', function() {
    describe('Validate the initial options', function() {
        it('options sould be non empty', function() {
            assert.ok(url)
            assert.ok(db)
            assert.ok(username)
            assert.ok(password)
        })
    })
    describe('Test method post()', function() {
        it('post an request for authentication', function(done) {
            let params = { db: db,  login: username, password: password }
            //baseurl, method, params, cookie, success, failure
            let method = '/web/session/authenticate'
            odoo.post(url, method, params, null, function(err, resp) {
              assert.equal(200, resp.statusCode);
              done()
            })
        })
    })
})
