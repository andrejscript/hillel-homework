'use strict'

function divArgs(...args) {
    return args.reduce(
        (acc, item) => acc / item
        );
}

module.exports = divArgs;


