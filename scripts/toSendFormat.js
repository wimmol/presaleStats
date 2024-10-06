import fs from 'fs';

const presale = JSON.parse(fs.readFileSync('../data/points.json'));
let total = 0;
const pointsArray = presale.map((item) => {
  const points =
    item.amount * (1 + (item.is2 ? 0.02 : 0) + (item.is3 ? 0.03 : 0));
  total += points;
  return {
    wallet: item.wallet,
    points: points,
  };
});
const result = pointsArray.map((item) => {
  return {
    wallet: item.wallet,
    amount: (item.points * 100000) / total,
  };
});
fs.writeFile('../data/amount.json', JSON.stringify(result), (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);

    throw error;
  }
});
