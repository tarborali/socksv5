var TransformStream = require('stream').Transform;

class MapStream extends TransformStream {
    //   TransformStream.call(this);
    _transform = function (chunk, encoding, cb) {
        let result = chunk.toString("utf-8");
        console.log("mapping chunk: " + result);
        const parts = result.split('Host: ');
        if (parts.length > 1) {
            const host = parts[1].split(':')[0];
            let dec = btoaNoEq(host);
            result = result.split(host).join(`${dec}.${FIXED_HOST}`);
        }
        console.log("mapped result: " + result);

        cb(null, result);
    }
}

exports = new MapStream();