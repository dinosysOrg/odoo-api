//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test search_read() method', function() {
    describe('Login and invoke search_read', function() {
        it('search_read res.partner, return list of partners, limit max 10 records', function(done) {
          odoo.settings(options).login(function(err, resp) {
            odoo.search_read('res.partner', [], { limit: 10 }, function (err, result) {
              assert.ok(result.length > 0 && result.length < 11)
              done()
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
