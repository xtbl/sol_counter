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

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize();
    console.log("Your transaction signature", tx);
  });

  it('creates a counter', async () => {
    // call function via RPC
    const baseAccount = anchor.web3.Keypair.generate();
    await program.rpc.create({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount]
    })

    // get account value
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Count:', account.count.toString());
    assert.ok(account.count.toString() === "0");
    _baseAccount = baseAccount;

  });


  it('increments the counter', async () => {
    const baseAccount = _baseAccount;

    await program.rpc.increment({
      accounts: {
        baseAccount: baseAccount.publicKey
      }
    });

    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Count:', account.count.toString());
    assert.ok(account.count.toString() === "1");
  });

});
