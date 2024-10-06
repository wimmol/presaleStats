import * as fs from 'fs';

const round1 = JSON.parse(fs.readFileSync('../data/round1_users.json'));
const round2 = JSON.parse(fs.readFileSync('../data/round2_users.json'));
const round3 = JSON.parse(fs.readFileSync('../data/round3_users.json'));
const presale = [...round1, ...round2, ...round3];

const uniq = {};
presale.forEach((item) => {
  if (uniq[item.id]) {
    uniq[item.id] = {
      ...uniq[item.id],
      amount: uniq[item.id].amount + item.amount,
    };
  } else {
    uniq[item.id] = item;
  }
});
const uniqArr = Object.values(uniq).sort((a, b) =>
  a.amount < b.amount ? 1 : -1
);
const total = uniqArr.reduce((acc, item) => (acc += item.amount), 0);
const result = {
  total: total,
  presalers: uniqArr,
};

fs.writeFile('../data/presalers.json', JSON.stringify(result), (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }
});
