const anchor = require('@project-serum/anchor');
const assert = require('assert');
const { SystemProgram } = anchor.web3;

describe('mysolanaapp', () => {

  // Configure the client to use the local cluster.
  console.log('------------- PROVIDER');
  // console.log(anchor.Provider.env().wallet.publicKey);
  const provider = anchor.Provider.env();
  anchor.setProvider(anchor.Provider.env());
  const program = anchor.workspace.Mysolanaapp;


  it('it initializes the account', async () => {
    // Add your test here.
    const baseAccount = anchor.web3.Keypair.generate();
    await program.rpc.initialize("writing account data 01",{
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount]
    });

    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Account data:', account.data.toString());
    assert.ok(account.data.toString() === "writing account data 01");
    _baseAccount = baseAccount;
  });

  it('it updates a previously created account', async () => {
    const baseAccount = _baseAccount;
    await program.rpc.update("new data", {
      accounts: {
        baseAccount: baseAccount.publicKey,
      },
    });

    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Updated data: ', account.data);
    assert.ok(account.data === "new data");
    console.log('all account data:', account);
    console.log('All data: ', account.dataList);
    assert.ok(account.dataList.length === 2);
  });



});
