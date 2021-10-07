// const fs = require('fs');
// const idl = require('./target/idl/mysolanaapp.json');

// fs.writeFileSync('./app/src/idl.json', JSON.stringify(idl));

// File destination.txt will be created or overwritten by default.
fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});