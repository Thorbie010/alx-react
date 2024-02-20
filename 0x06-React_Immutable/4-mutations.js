import { Map } from 'immutable';


export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Create a modified version of the initial map
export const map2 = map
    .set(2, 'Benjamin')
    .set(4, 'Oliver'); // This step modifies the existing value at index 2 and 4
