function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let element of collection) {
            callback(element)
        }
    } else {
        let arrayOfValues = Object.values(collection)
        for (let element of arrayOfValues) {
            callback(element)
        }
    }
    return collection
};

function myMap(collection, callback) {
    let newArray = []
    if (Array.isArray(collection)) {
        for (let element of collection) {
            newArray.push(callback(element))
        }
    } else {
        for (let key in collection) {
            newArray.push(callback(collection[key], key))
        }
    }
    return newArray
};

function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
        for (let element of collection) {
            if (typeof acc === 'number') {
            acc = callback(acc, element, collection)
            } else {
                acc = collection[0]
            }
        }
    } else {
        let arrayOfValues = Object.values(collection)
        for (let element of arrayOfValues) {
            if (typeof acc === 'number') {
                acc = callback(acc, element, collection)
            } else {
                acc = arrayOfValues[0]
            }
        }
    }
    return acc
};

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let element of collection) {
            if (predicate(element)) {
                return element
            } 
        }
    } else {
        let arrayOfValues = Object.values(collection)
        for (let element of arrayOfValues) {
            if (predicate(element)) {
                return element
            }
        }
    }
};

function myFilter(collection, predicate) {
    let filteredArray = []
    if (Array.isArray(collection)) {
        for (let element of collection) {
            if (predicate(element)) {
                filteredArray.push(element)
            }
        }
    } else {
        let arrayOfValues = Object.values(collection)
        for (let element of arrayOfValues) {
            if (predicate(element)) {
                filteredArray.push(element)
            }
        }
    }
    return filteredArray
};

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length
    } else {
        let arrayOfValues = Object.values(collection)
        return arrayOfValues.length
    }
};

function myFirst(array, n) {
    if (n > 1) {
        let returnArray = []
        for (let i=0; i < n; i++) {
            returnArray.push(array[i])
        }
        return returnArray
    } else {
        return array[0]
    }
};

function myLast(array, n) {
    if (n > 1) {
        let returnArray = []
        for (let i = array.length - n; i < array.length; i++) {
            returnArray.push(array[i])
        }
        return returnArray
    } else {
        return array[array.length - 1]
    }
};

function myKeys(object) {
    return Object.keys(object)
};

function myValues(object) {
    return Object.values(object)
};