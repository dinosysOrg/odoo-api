//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test login() method', function() {
    describe('Read id of login user', function() {
        it('uid > 0', function(done) {
          odoo.settings(options).login(function(err, session) {
            if (err) {
              console.error(err)
            }
            assert.ok(session.uid > 0)
            done()
          })
        })
    })
})
