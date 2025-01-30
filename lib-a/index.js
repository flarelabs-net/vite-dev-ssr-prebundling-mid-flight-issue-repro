const context = {
    timestamp: Date.now(),
}

function setup() {
    globalThis.context = context;
}

exports.context = context;
exports.setup = setup;
