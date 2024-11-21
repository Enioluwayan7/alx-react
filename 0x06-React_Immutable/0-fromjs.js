#!/usr/bin/node
/**
 * Converts a JavaScript object into an immutable Map using Immutable.js.
 */

const { fromJS } = require('immutable');

/**
 * getImmutableObject
 * Converts an object into an immutable Map.
 * 
 * @param {Object} obj - The object to convert.
 * @returns {Map} - An immutable Map representation of the object.
 */
function getImmutableObject(obj) {
    return fromJS(obj);
}

// Example usage
const exampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
};

const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);
