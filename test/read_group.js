//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test read_group() method', function() {
    describe('Login and invoke read_group', function() {
        it('Aggregate sales by partner_id, return list of sales', function(done) {
          odoo.settings(options).login(function(err, resp) {
            const domain = [['create_date', '>', '2017-11-01' ], ['create_date', '<', '2017-11-30']]
            const groupby = ['partner_id']
            const fields = ['partner_id', 'amount_total']
            const kwargs = { limit: 10, orderby: 'amount_total desc' }
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

    describe('Sale report', function() {
      it('read sale report', function(done) {
        const domain = [["state","not in",["draft","cancel","sent"]],"|",["date",">","2017-10-31 17:19:34"],["date","<","2017-11-29 17:19:54"]]
        const fields = ["date", "team_id", "price_subtotal"]
        const groupby = [ "date:month", "team_id" ]
        const kwargs = {}
        odoo.settings(options).login(function(err, resp) {
          odoo.read_group('sale.report', domain, fields, groupby, kwargs, function(err, result) {
            console.log(result)
            done()
          })
        })
      })
    })
})
