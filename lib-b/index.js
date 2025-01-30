const libA = require('lib-a');

if (libA.context !== globalThis.context) {
    throw new Error(
        'Error context mismatch: ' +
        `(found context with timestamp ${globalThis.context.timestamp}, expected ${libA.context.timestamp})`);
}

exports.msg = 'Hello world';
