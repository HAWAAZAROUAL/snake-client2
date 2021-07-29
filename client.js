const { Server } = require("http");
const net = require("net");
const {IP, PORT} = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`client is connected to the server`);
    // code that does something when the connection is first established
  
});
//conn.Name = "LOL";
conn.on("connect", () => {
  console.log(`successfully connected to Server.`)
  conn.write('Name: lol');
  conn.write("Move: up");
});
 conn.on('data', (message) => {
      console.log(`server sent:${message}`)
    });
 return conn; 
};

//time to export this function
module.exports = {
 connect
}