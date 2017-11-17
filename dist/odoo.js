'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settings = require('./lib/core/settings');

var _settings2 = _interopRequireDefault(_settings);

var _post = require('./lib/core/post');

var _post2 = _interopRequireDefault(_post);

var _login = require('./lib/core/login');

var _login2 = _interopRequireDefault(_login);

var _callKw = require('./lib/core/call-kw');

var _callKw2 = _interopRequireDefault(_callKw);

var _count = require('./lib/core/count');

var _count2 = _interopRequireDefault(_count);

var _search = require('./lib/core/search');

var _search2 = _interopRequireDefault(_search);

var _read = require('./lib/core/read');

var _read2 = _interopRequireDefault(_read);

var _search_read = require('./lib/core/search_read');

var _search_read2 = _interopRequireDefault(_search_read);

var _one = require('./lib/core/one');

var _one2 = _interopRequireDefault(_one);

var _read_group = require('./lib/core/read_group');

var _read_group2 = _interopRequireDefault(_read_group);

var _create = require('./lib/core/create');

var _create2 = _interopRequireDefault(_create);

var _update = require('./lib/core/update');

var _update2 = _interopRequireDefault(_update);

var _delete = require('./lib/core/delete');

var _delete2 = _interopRequireDefault(_delete);

var _name_get = require('./lib/core/name_get');

var _name_get2 = _interopRequireDefault(_name_get);

var _fields_get = require('./lib/core/fields_get');

var _fields_get2 = _interopRequireDefault(_fields_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var odoo = {};

odoo.version = '1.0.0';
odoo._session = { cookie: '', context: '', uid: '', session_id: '' };
odoo.settings = _settings2.default;
odoo.post = _post2.default;
odoo.login = _login2.default;
odoo.call_kw = _callKw2.default;
odoo.count = _count2.default;
odoo.search = _search2.default;
odoo.read = _read2.default;
odoo.search_read = _search_read2.default;
odoo.list = _search_read2.default;
odoo.one = _one2.default;
odoo.read_group = _read_group2.default;
odoo.aggregate = _read_group2.default;

odoo.name_get = _name_get2.default;
odoo.fields_get = _fields_get2.default;
odoo.desc = _fields_get2.default;

odoo.create = _create2.default;
odoo.update = _update2.default;
odoo.delete = _delete2.default;

exports.default = odoo;