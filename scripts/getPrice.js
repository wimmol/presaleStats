import axios from 'axios';

const tonApi = axios.create({
  baseURL: 'http://tonapi.io',
  headers: {
    Authorization:
      'Bearer AFPJTKEBPOX3AIYAAAAKA2HWOTRNJP5MUCV5DMDCZAAOCPSAYEYS3CILNQVLF2HWKED6USY',
  },
});

const reserves = await tonApi(
  `/v2/blockchain/accounts/EQC7bRuXKMO14nFANjFX3cxU4I7fuftM83vtEAfXaz7nG_5Y/methods/get_reserves`
);

const data = reserves.data;
const price = data.decoded.reserve0 / data.decoded.reserve1;
console.log(price);
