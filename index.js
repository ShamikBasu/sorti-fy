
const { getType, isArray } = require('./getType');
const { numericArraySort, numericMultipleArraySort } = require('./ArraySorter/numeric');

/*
    Driver functions which will return the sorted data
    Syntax:
        1.sort(data, true)
            argument 1 : data -> the collection of data that needs to be sorted
                         accepted types : 
                                1. array
            argument 2 : ascending (optional, default: true)
                        Type: boolean
                        Description: Determines the order in which the merged array should be sorted.
                                        If true, the function sorts the array in ascending order.
                                        If false, the function sorts the array in descending order.
                        Default Value: The default value is true, meaning that if the user does not provide this parameter, the merged array will be sorted in ascending order by default.
        
        
        2.multipleSort(ascending = true, ...arrays)
         The function merges multiple arrays and sorts the merged result.

            argument 1 : ascending (optional, default: true)
                        Type: boolean
                        Description: Determines the order in which the merged array should be sorted.
                                        If true, the function sorts the array in ascending order.
                                        If false, the function sorts the array in descending order.
                        Default Value: The default value is true, meaning that if the user does not provide this parameter, the merged array will be sorted in ascending order by default.

            argument 2 : ...arrays (rest parameter)
                        Type: Array[]
                        Description: An indefinite number of arrays that will be merged and then sorted. The function accepts any number of arrays as arguments.
                        Behavior: The arrays are first merged into a single array, and then the merged array is sorted based on the ascending parameter.


*/

function sort(data, ascending = true) {

    if (isArray(data) && data.length > 0) {
        return numericArraySort(data, ascending);
        // switch (data[data.length - 1]) {
        //     case 'number':
        //         return numericArraySort(data, order);
        //         break;
        // default:
        //     throw new Error('Invaid Data Type of the array');
        //}
    }
    else if (isArray(data) && data.length == 0) {
        return data;
    }

}

function multipleSort(ascending = true, ...arrays) {
    const mergedArray = arrays.flat();
    if (isArray(mergedArray) && mergedArray.length > 0)
        return numericMultipleArraySort(mergedArray, ascending);
    else
        return [];
}
module.exports = {
    sort,
    multipleSort
};