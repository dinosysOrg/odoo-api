//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test read_group() method', function() {
    describe('Login and invoke read_group', function() {
        it('Aggregate sales by partner_id, return list of sales', function(done) {
          odoo.settings(options).login(function(err, resp) {
            let domain = [['id', '<', '10']]
            let groupby = ['partner_id']
            let fields = ['partner_id', 'amount_total']
            odoo.read_group('sale.order', domain, fields, groupby, {}, function (err, result) {
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
