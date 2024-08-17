const {sort} = require('../index')


describe('sort', () => {
  it('should sort numbers in ascending order with default case', () => {
    const array = [3, 1, 4, 1, 5, 9];
    const expected = [1, 1, 3, 4, 5, 9];
    //console.log(sort(array));
    expect(sort(array)).toEqual(expected);
  });

  it('should sort numbers in ascending order with parameter as True', () => {
    const array = [3, 1, 4, 1, 5, 9];
    const expected = [1, 1, 3, 4, 5, 9];
    //console.log(sort(array));
    expect(sort(array, true)).toEqual(expected);
  });
  it('should sort numbers in descending order', () => {
    const array = [3, 1, 4, 1, 5, 9];
    const expected = [9, 5, 4, 3, 1, 1];
    //console.log("Descending",sort(array, false))
    expect(sort(array, false)).toEqual(expected);
  });

  it('should handle empty array', () => {
    const array = [];
    expect(sort(array)).toEqual([]);
  });

  it('should handle array with one element', () => {
    const array = [5];
    expect(sort(array)).toEqual([5]);
  });

  it('should handle array with duplicate elements', () => {
    const array = [3, 1, 4, 1, 5, 9];
    const expected = [1, 1, 3, 4, 5, 9];
    expect(sort(array)).toEqual(expected);
  });

//   it('should throw an error for invalid order', () => {
//     const array = [3, 1, 4, 1, 5, 9];
//     expect(() => sort(array, 'invalid')).toThrow('Invalid order. Use "asc" or "desc".');
//   });

  it('should not mutate the original array', () => {
    const array = [3, 1, 4, 1, 5, 9];
    const originalArray = [...array];
    sort(array);
    expect(array).toEqual(originalArray);
  });
//   it('should throw an error for non-array input', () => {
//     expect(() => sort('not an array')).toThrow('Invaid Data Type of the array');
//   });

//   it('should throw an error for an array with non-number last element', () => {
//     expect(() => sort(["1", "2"])).toThrow('Invaid Data Type of the array');
//   });
});