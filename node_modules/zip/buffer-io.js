
var bops = require("bops");

exports.BufferIO = function () {
    var self = {};
    var buffers = [];

    // TODO read size
    self.read = function () {
        consolidate(buffers);
        return buffers.shift();
    };

    self.write = function (buffer) {
        buffers.push(bops.from(buffer));
    };

    self.close = function () {
    };

    self.destroy = function () {
    };

    self.toBuffer = function () {
        consolidate(buffers);
        // for whatever reason, the buffer constructor does
        // not copy buffers in v0.3.3  XXX TODO: how about with bops?
        var buffer = bops.create(buffers[0].length);
        bops.copy(buffers[0], buffer, 0, 0, buffers[0].length);
        return buffer;
    };

    return self;
};

exports.consolidate = consolidate;
function consolidate(buffers) {
    var length = 0;
    var at;
    var i;
    var ii = buffers.length;
    var buffer;
    var result;
    for (i = 0; i < ii; i++) {
        buffer = buffers[i];
        length += buffer.length;
    }
    result = bops.create(length);
    at = 0;
    for (i = 0; i < ii; i++) {
        buffer = buffers[i];
        bops.copy(buffer, result, at, 0, buffer.length);
        at += buffer.length;
    }
    buffers.splice(0, ii, result);
}

