var tz = require('../');

console.log('KR, 11', 'Asia/Seoul' === tz.lookup('KR', '11'));
console.log('US, CA', 'America/Los_Angeles' === tz.lookup('US', 'CA'));
