//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test search() method', function() {
    describe('Login and invoke search', function() {
        it('search res.partner, return list of ids', function(done) {
          odoo.settings(options).login(function(err, resp) {
            odoo.search('res.partner', [], {}, function (err, result) {
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
