export default function accessImmutableObject(object, array) {
    if (array.length === 0) {
        return object; // Base case: if the array is empty, return the current object
    }

    const [currentKey, ...remainingKeys] = array; // Destructure the first key and the rest

    // Check if the current object is a Map
    if (object instanceof Map) {
        const value = object.get(currentKey); // Get the value corresponding to the current key
        return accessImmutableObject(value, remainingKeys); // Recursively call accessImmutableObject with the value and remaining keys
    }

    // Check if the current object is an object
    if (typeof object === 'object' && object !== null) {
        const value = object[currentKey]; // Get the value corresponding to the current key
        return accessImmutableObject(value, remainingKeys); // Recursively call accessImmutableObject with the value and remaining keys
    }

    return undefined; // Return undefined if the current object is neither a Map nor an object
}
