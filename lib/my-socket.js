const { Socket } = require('net');
const { inherits } = require('util');

function MySocket() {}

inherits(MySocket, Socket);

MySocket.prototype.write = function (str, encoding, cb) {
    console.log("writing", str, encoding, cb);
    Socket.write(str, encoding, cb);
}

exports = MySocket;