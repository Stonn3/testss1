function findCommonValues(arrays) {
    if (arrays.some(arr => arr.length === 0)) {
        return [];
    }

    const firstArray = arrays[0];
    return firstArray.filter(value => arrays.every(arr => arr.includes(value)));
}

module.exports = findCommonValues;
