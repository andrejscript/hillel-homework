'use strict'

const collect = {}

collect.add = require('./mod_add');
collect.sub = require('./mod_sub');
collect.mult = require('./mod_mult');
collect.div = require('./mod_div');

module.exports = collect;
