import { Map } from 'immutable';


/**
 * Converts a JavaScript object into an Immutable Map.
 * @param {Object} object - The JavaScript object to convert.
 * @returns {Map} - The Immutable Map representation of the object.
 */
export default function getImmutableObject(object) {
  // Convert the object to Immutable Map
  return Map(object);
}
