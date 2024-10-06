import fs from 'fs';
import { json2csv } from 'json-2-csv';

const amount = JSON.parse(fs.readFileSync('../data/amount.json'));

const csv = await json2csv(amount);

fs.writeFile('../data/amount.csv', csv, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }
});
