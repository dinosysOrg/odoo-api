//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test delete() method', function() {
    describe('Login and invoke delete', function() {
        it('delete a new partner for given json. Return id > 0', function(done) {
          odoo.settings(options).login(function(err, resp) {
            let parnter = {
                "ref": "odoo-test-partner",
                "name": "Muster Mann",
                "city": "Berlin",
                "street": "26 Lindner strasse",
                "mobile": "+49 176 1234 56",
                "email": "odoo.api@dinosys.vn",
                "active": "true",
                "customer": "true",
                "company_type": "person"
            }
            odoo.create('res.partner', parnter, function (err, result) {
              assert.ok(result > 0)
              odoo.delete('res.partner', result, function (err, deleted) {
                assert.ok(deleted)
                done()
              })
            })
          }, function (err) {
            assert.fail('Login error: ' + err)
            done()
          })
        })
    })
})
