//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test count() method', function() {
    describe('Login and invoke count', function() {
        it('Count number of res.partner', function(done) {
          odoo.settings(options).login(function(err, resp) {
            odoo.count('res.partner', [], {}, function (err, count) {
              assert.ok(count > 0)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
