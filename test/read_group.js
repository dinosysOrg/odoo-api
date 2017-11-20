//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test read_group() method', function() {
    describe('Login and invoke read_group', function() {
        it('Aggregate sales by partner_id, return list of sales', function(done) {
          odoo.settings(options).login(function(err, resp) {
            let domain = [[ 'create_date', '>', '2017-11-01' ], [ 'create_date', '<', '2017-11-30' ]]
            let groupby = ['partner_id']
            let fields = ['partner_id', 'amount_total']
            let kwargs = { limit: 10, orderby: 'amount_total desc' }
            odoo.read_group('sale.order', domain, fields, groupby, kwargs, function (err, result) {
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
