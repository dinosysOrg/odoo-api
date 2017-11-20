//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test search_read() method', function() {
    describe('Login and invoke search_read', function() {
        it('search_read res.partner, return list of partners, limit max 10 records', function(done) {
          odoo.settings(options).login(function(err, resp) {
            let domain = [ [ 'create_date', '>', '2017-11-01' ], [ 'create_date', '<', '2017-11-30' ] ]
            let fields = [ 'name', 'display_name', 'create_date' ]
            let kwargs = {
              order: 'create_date asc',
              limit: 10,
              offset: 0,
            };
            odoo.search_read('res.partner', domain, fields, kwargs, function (err, result) {
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
