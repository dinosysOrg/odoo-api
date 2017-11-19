//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test one() method', function() {
    describe('Login and invoke one', function() {
        it('get a single res.partner', function(done) {
          // assuming id = 1 available in db
          odoo.settings(options).login(function(err, resp) {
            odoo.one('res.partner', 1, { fields: [ 'name', 'display_name' ] }, function (err, result) {
              assert.equal(1, result.id)
              assert.ok(result.name)
              assert.ok(result.display_name)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
