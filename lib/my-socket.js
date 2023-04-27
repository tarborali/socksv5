const { Socket } = require('net');
class MySocket extends Socket {
    constructor(options) {
        super(options);
    }
    write(str, encoding, cb) {
        console.log("writing", str, encoding, cb);
        super.write(str, encoding, cb);
    }
}

exports = MySocket;