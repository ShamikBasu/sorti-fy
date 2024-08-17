
const { getType, isArray } = require('./getType');
const { numericArraySort } = require('./ArraySorter/numeric');

/*
    Driver functions which will return the sorted data
    Syntax:
        1.sort(data, true)
            argument 1 : data -> the collection of data that needs to be sorted
                         accepted types : 
                                1. array
            argument 2 : ascending -> true for data to be sorted in ascending order
                                   -> false for data to be sorted in descending order
                         accepted type : Boolean -> true/false
                         default : true



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
module.exports = {
    sort
};