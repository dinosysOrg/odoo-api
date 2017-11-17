//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test name_get() method', function() {
    describe('Login and invoke name_get', function() {
        it('name_get for res.partner', function(done) {
          odoo.settings(options).login(function(err, resp) {
            odoo.name_get('res.partner', [1], {}, function (err, result) {
              assert.equal(1, result.length)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
