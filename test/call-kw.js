//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test call_kw() method', function() {
    describe('Login and invoke call_kw', function() {
        it('Number of res.company > 0', function(done) {
          odoo.settings(options).login(function(err, resp) {
            odoo.call_kw('res.company', 'search_count', [[]], {}, function (err, resp) {
              assert.ok(resp.body.result > 0)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
