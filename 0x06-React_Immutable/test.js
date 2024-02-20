const Immutable = require('immutable');
const { getImmutableObject } = require('./0-fromjs'); // Import the function to be tested

const testObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(testObject);
console.log(immutableMap);