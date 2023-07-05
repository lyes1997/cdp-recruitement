const { data } = require('./data.js');
const filterDataByPattern = require('./utils/filterDataByPattern');
const countDataChildren = require('./utils/countDataChildren');

const argv = require('process').argv;
const flagAndValue = argv[2] ? argv[2].split('=') : [];
const flag = flagAndValue[0];
const value = flagAndValue[1];

if (!data || !Array.isArray(data)) {
    console.error('Invalid data');
    process.exit(1);
}

console.log(flag);

if (flag === '--filter') {
    if (typeof value !== 'string') {
        console.error('Invalid argument for filter');
        process.exit(1);
    }
    console.log(JSON.stringify(filterDataByPattern(data, value), null, 2));
} else if (flag === '--count') {
    console.log(JSON.stringify(countDataChildren(data), null, 2));
} else {
    console.error('Unknown command');
    process.exit(1);
}
