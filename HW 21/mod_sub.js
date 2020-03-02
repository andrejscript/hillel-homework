'use strict'

function subArgs(...args) {
    return args.reduce(
        (acc, item) => acc - item
        );
}

module.exports = subArgs;



