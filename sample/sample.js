// following codes don't work. They are just for reference.

const bitbank = require('node-bitbankcc');
const publicAPIs = bitbank.publicApi();
const privateAPIs = bitbank.privateApi();

(async() => {
  // public APIs
  await publicAPIs.getCandlestick('xrp_jpy', '1day', 2017);

  // read
  await privateAPIs.getOrdersInfo('xrp_jpy', [3287273]);
  await privateAPIs.getTradeHistory();
  await privateAPIs.getTradeHistory({ pair: 'xrp_jpy' });

  // withdraw
  await privateAPIs.getWithdrawAccount('btc');
  await privateAPIs.requestWithdraw('btc', 'wwwwwwwwww', 0.01, { otp_token: 223330 });
})();
