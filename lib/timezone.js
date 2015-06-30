/**
 * timezone.js
 */

'use strict';

var timezone = {};

// init data
timezone.data = require('../tz.json');

timezone.lookup = function(country, region) {
    return this.data[[country, region].join('_')] || this.data[[country, ''].join('_')];
};

module.exports = timezone;