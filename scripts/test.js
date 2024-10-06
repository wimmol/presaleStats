import fs from 'fs';

const presale = JSON.parse(fs.readFileSync('../data/amount.json'));
console.log(presale.reduce((acc, item) => (acc += item.amount), 0));
