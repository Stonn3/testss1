const findCommonValues = require('../function');

test('returns an array of unique values present in all provided arrays', () => {
    expect(findCommonValues([[1, 2], [2, 3]])).toEqual([2]);
    expect(findCommonValues([[1, 2, 3], [4, 2, 5], [2, 6, 7]])).toEqual([2]);
    expect(findCommonValues([[1, 2], [3, 4]])).toEqual([]);
    expect(findCommonValues([[1, 2], []])).toEqual([]);
});

test('returns an empty array if any provided array is empty', () => {
    expect(findCommonValues([[1, 2], []])).toEqual([]);
});
