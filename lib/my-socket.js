const { Socket } = require('net');
class MySocket extends Socket {
    constructor() {
        super(...arguments);
    }

    connect() {
        let result = super.connect.apply(this, arguments);
        this.write = MySocket.prototype.write.bind(this);
        return result;
    }

    write(str, encoding, cb) {
        console.log("writing", str, encoding, cb);
        super.write(str, encoding, cb);
    }
}

exports = MySocket;