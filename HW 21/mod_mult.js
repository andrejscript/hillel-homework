'use strict'

function multArgs(...args) {
    return args.reduce(
        (acc, item) => acc * item
        );
}

module.exports = multArgs;


