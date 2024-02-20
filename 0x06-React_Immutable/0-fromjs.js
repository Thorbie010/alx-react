// Import Immutable.js library
import { fromJS } from 'immutable';


// Define the function to convert an object to an immutable Map
export default function getImmutableObject(object) {
    // Use fromJS to convert the object to an immutable Map
    return fromJS(object);
}
