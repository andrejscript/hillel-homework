'use strict'

let addArgs = function (...args) {
    return args.reduce(
        (acc, item) => acc + item
        );
}

module.exports = addArgs;
