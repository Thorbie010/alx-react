import { Map } from 'immutable';


export function mergeDeeplyElements(page1, page2) {
    const mergedMap = Map(page1).mergeWith((oldVal, newVal) => {
        if (Map.isMap(oldVal) && Map.isMap(newVal)) {
            return oldVal.mergeWith((oldInnerVal, newInnerVal) => {
                if (Map.isMap(oldInnerVal) && Map.isMap(newInnerVal)) {
                    return oldInnerVal.merge(newInnerVal);
                } else {
                    return newInnerVal;
                }
            }, newVal);
        } else {
            return newVal;
        }
    }, page2);
    return mergedMap.toList();
}
