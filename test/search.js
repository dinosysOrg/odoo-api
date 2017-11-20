//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test search() method', function() {
    describe('Login and invoke search', function() {
        it('search res.partner, return list of ids', function(done) {
          odoo.settings(options).login(function(err, resp) {
            let domain = [ [ 'create_date', '>', '2017-11-01' ], [ 'create_date', '<', '2017-11-30' ] ]
            let kwargs = {
              limit: 10,
              order: 'id asc'
            };
            odoo.search('res.partner', domain, kwargs, function (err, result) {
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
