import fs from 'fs';
import axios from 'axios';

const INVEST =
  '0:c0b86656d5a9aee192ff8c3d37f6ae74c34f64e0332adf73d73596f20ef765a6';
const ICE =
  '0:d67eeb8342f4fc1e123f82136b6a2d4b3930355c61f0d78a5520f6aa2805da92';
const AVTR =
  '0:02ec046c27a49ca711973ca2b7fb0da15ef1a20d37c4f70971374d8799a2ed2a';
const DMT =
  '0:ea665ac046fe233c9a70cdb60f3623ad0ff0a8b96c5e0066e9edac00ce87b340';
const TYS =
  '0:745384c7ebd0810fa01e3bfc8714c5bebbdd14987ffae46c3902465b96ddc63b';

const nano = 1000000000;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const presale = JSON.parse(fs.readFileSync('../data/presalers.json'));
const tonApi = axios.create({
  baseURL: 'http://tonapi.io',
  headers: {
    Authorization:
      'Bearer AFPJTKEBPOX3AIYAAAAKA2HWOTRNJP5MUCV5DMDCZAAOCPSAYEYS3CILNQVLF2HWKED6USY',
  },
});
//188
const result = [];
const main = async () => {
  for (let i = 0; i < presale.presalers.length; i++) {
    const jettons = await tonApi(
      `/v2/accounts/${presale.presalers[i].wallet}/jettons`
    );
    // console.log(jettons.data.balances.length);
    let is3 = false,
      is2 = false;
    jettons.data.balances.forEach((item) => {
      const balance = item.balance / nano;
      switch (item.jetton.address) {
        case INVEST:
          if (balance > 3000) is3 = true;
          if (balance > 434) is2 = true;
          break;
        case ICE:
          if (balance > 1.932) is2 = true;
          break;
        case AVTR:
          if (balance > 0.0032) is2 = true;
          break;
        case DMT:
          if (balance > 0.42) is2 = true;
          break;
        case TYS:
          if (balance > 0.0081) is2 = true;
          break;
      }
    });
    result.push({
      ...presale.presalers[i],
      is2,
      is3,
    });
    console.log(result.length);
    await sleep(100);
  }
  fs.writeFile('../data/points1.json', JSON.stringify(result), (error) => {
    // throwing the error
    // in case of a writing problem
    if (error) {
      // logging the error
      console.error(error);

      throw error;
    }
  });
};
main();

// return {
//   ...item,
// };
// {
//   "id": 377090862,
//   "wallet": "EQB2i0KKDTCziBOfXEjruU8iOycoqT4gUZznROnWlXlQMPMD",
//   "amount": 5,
//   "user_data": {
//   "first_name": "🐤Denis Gra-Gra 🌱 SEED”",
//     "username": "denisv999",
//     "language_code": "ru",
//     "is_premium": true
// },
//   "is2": false,
//   "is3": false
// },
// {
//   "id": 371544960,
//   "wallet": "EQCY6YLuL7VjuOD697_-IErsK_plZ1DEksrakT81r0SsRuMi",
//   "amount": 5,
//   "user_data": {
//   "first_name": "xtati",
//     "username": "ixtati",
//     "language_code": "en"
// },
//   "is2": false,
//   "is3": false
// },
// {
//   "id": 251036021,
//   "wallet": "EQBlXNG9piJsGLIX4UZ682mxffr4vxoEXx6oq-bEIiw6-N_T",
//   "amount": 5,
//   "user_data": {
//   "first_name": "WinWin 🍅🦉🐈‍⬛🌱",
//     "username": "GoWinWin",
//     "language_code": "uk",
//     "is_premium": true
// },
//   "is2": true,
//   "is3": false
// }
