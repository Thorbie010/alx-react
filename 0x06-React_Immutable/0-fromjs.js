// Import Immutable.js library
const { Map, fromJS } = require('immutable');

// Define the function to convert an object to an immutable Map
function getImmutableObject(object) {
    // Use fromJS to convert the object to an immutable Map
    return fromJS(object);
}

module.exports = { getImmutableObject };