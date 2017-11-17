//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test update() method', function() {
    describe('Login and invoke update', function() {
        it('update a partner for given id', function(done) {
          let update = function (id, partner) {
            odoo.update ('res.partner', id, { name: 'Mocha Test' }, function (err, updated) {
              assert.ok(updated)
              done()
            })
          }
          odoo.settings(options).login(function(err, resp) {
            odoo.one('res.partner', 1, function (err, partner) {
              update(partner.id, partner)
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
