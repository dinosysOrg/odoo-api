//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

  describe('Test read() method', function() {
    describe('Login and invoke read', function() {
        it('read res.partner, return a list of partners', function(done) {
          odoo.settings(options).login(function(err, resp) {
            // assuming there're ids [1, 2] available in db
            odoo.read('res.partner', [1, 2], {}, function (err, result) {
              assert.ok(result.length > 0)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
