async function setupNEARAccounts() {
  const { nearAPI, utils } = require('near-web3-provider');
  const keyStore = new nearAPI.keyStores.UnencryptedFileSystemKeyStore('neardev');
  const config = {
    nodeUrl: 'http://127.0.0.1:3030',
    keyStore,
    networkId: 'local',
    masterAccountId: 'test.near',
    evmAccountId: 'evm',
  };
  const near = await nearAPI.connect(Object.assign({ deps: { keyStore } }, config));
  const acct = await near.account(near.config.masterAccountId);
  await utils.createTestAccounts(acct, 5);
}

setupNEARAccounts()
  .catch(e => {
    console.log('Issue setting up accounts: ' + e.message);
  });
