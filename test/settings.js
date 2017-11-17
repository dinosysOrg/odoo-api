//assert references: https://nodejs.org/api/assert.html
const assert = require('assert');
import options from './init'
import odoo from '../src/odoo'

describe('Test settings() method', function() {
    describe('Check the enpoint of odoo server', function() {
        it('test setter/getter', function() {
            assert.equal(options, odoo.settings(options).settings())
        })
    })

})
