
const {connect} = require('./client')
const {setupInput} = require('./input');

console.log("Connecting ...");
const conn =connect();
setupInput(conn);






//progress on Compass:
//CLient set up was completed successfully
// exported from client and imported by play
// I can see my name
//played with the move command
// for (let i = 1; i < 20; i++) {
//   setTimeout(()=> {
//     conn.write('Move: up')
//   }, 50 * i)
// }

//successfully did stdin, and inputted the wasd keys.
// Input module- done- file still runs
// My snake moves!