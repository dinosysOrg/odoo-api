import settings from './lib/core/settings'
import post from './lib/core/post'
import login from './lib/core/login'
import call_kw from './lib/core/call-kw'
import count from './lib/core/count'
import search from './lib/core/search'
import read from './lib/core/read'
import search_read from './lib/core/search_read'
import one from './lib/core/one'
import read_group from './lib/core/read_group'
import create from './lib/core/create'
import update from './lib/core/update'
import del from './lib/core/delete'
import name_get from './lib/core/name_get'
import fields_get from './lib/core/fields_get'

const odoo = {}

odoo.version = '1.0.0'
odoo._session = { cookie: '', context: '', uid: '', session_id: ''}
odoo.settings = settings
odoo.post = post
odoo.login = login
odoo.call_kw  = call_kw
odoo.count = count
odoo.search = search
odoo.read = read
odoo.search_read = search_read
odoo.list = search_read
odoo.one = one
odoo.read_group = read_group
odoo.aggregate = read_group

odoo.name_get = name_get
odoo.fields_get = fields_get
odoo.desc = fields_get

odoo.create = create
odoo.update = update
odoo.delete = del

export default odoo
