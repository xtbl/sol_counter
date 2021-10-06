const anchor = require('@project-serum/anchor');
const assert = require('assert');

describe('mysolanaapp', () => {

  // Configure the client to use the local cluster.
  console.log('------------- PROVIDER');
  console.log(anchor.Provider.env().wallet.publicKey);
  anchor.setProvider(anchor.Provider.env());

  it('Is initialized!', async () => {
    // Add your test here.
    const program = anchor.workspace.Mysolanaapp;
    const tx = await program.rpc.initialize();
    console.log("Your transaction signature", tx);
  });

  it('creates a counter', async () => {
    // call function via RPC

  });



});
