const { sort, multipleSort } = require('../index')


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

describe('multipleSort', () => {

  test('should sort a single array in ascending order - 1 ARRAY', () => {
    const result = multipleSort(true, [3, 1, 4, 1]);
    expect(result).toEqual([1, 1, 3, 4]);
  });

  test('should sort a single array in descending order - 1 ARRAY', () => {
    const result = multipleSort(false, [3, 1, 4, 1]);
    expect(result).toEqual([4, 3, 1, 1]);
  });

  test('should merge and sort multiple arrays in ascending order - 3 ARRAYS', () => {
    const result = multipleSort(true, [3, 1], [4, 1], [2, 6]);
    expect(result).toEqual([1, 1, 2, 3, 4, 6]);
  });

  test('should merge and sort multiple arrays in descending order - 3 ARRAYS', () => {
    const result = multipleSort(false, [3, 1], [4, 1], [2, 6]);
    expect(result).toEqual([6, 4, 3, 2, 1, 1]);
  });

  test('should merge and sort multiple arrays in ascdending order - 4 ARRAYS', () => {
    const result = multipleSort(true, [3, 1], [4, 1], [2, 6], [17, 7, 9]);
    expect(result).toEqual([1, 1, 2, 3, 4, 6, 7, 9, 17]);
  });

  test('should handle empty arrays', () => {
    const result = multipleSort(true, [], []);
    expect(result).toEqual([]);
  });

  test('should handle arrays with one element - 3 ARRAYS', () => {
    const result = multipleSort(true, [5], [2], [9]);
    expect(result).toEqual([2, 5, 9]);
  });

  test('should handle arrays with negative numbers in ascending order - 4 ARRAYS', () => {
    const result = multipleSort(true, [-3, 1], [-4, 2], [0, -1]);
    expect(result).toEqual([-4, -3, -1, 0, 1, 2]);
  });

  test('should handle arrays with negative numbers in descending order - 3 ARRAYS', () => {
    const result = multipleSort(false, [-3, 1], [-4, 2], [0, -1]);
    expect(result).toEqual([2, 1, 0, -1, -3, -4]);
  });

  test('should sort arrays with duplicate values in ascending order- 1 ARRAY', () => {
    const result = multipleSort(true, [3, 1, 3, 1]);
    expect(result).toEqual([1, 1, 3, 3]);
  });

  test('should sort arrays with duplicate values in descending order- 1 ARRAY', () => {
    const result = multipleSort(false, [3, 1, 3, 1]);
    expect(result).toEqual([3, 3, 1, 1]);
  });

  test('should sort arrays with floating values in descending order- 1 ARRAY', () => {
    const result = multipleSort(false, [3.67, 1.21, 3, 1.9734]);
    expect(result).toEqual([3.67, 3, 1.9734, 1.21]);
  });


  test('should return an empty array if no arrays are passed', () => {
    const result = multipleSort(true);
    expect(result).toEqual([]);
  });

});
