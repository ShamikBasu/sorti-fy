
const { getType, isArray } = require('./getType');
const { numericArraySort } = require('./ArraySorter/numeric');
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