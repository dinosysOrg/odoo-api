//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test fields_get() method', function() {
    describe('Login and invoke fields_get', function() {
        it('fields_get for res.partner', function(done) {
          odoo.settings(options).login(function(err, resp) {
            odoo.fields_get('res.partner', [], {}, function (err, result) {
              assert.equal('char', result.name.type)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
