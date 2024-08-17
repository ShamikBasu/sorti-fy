function numericArraySort(array, ascending = true) {
    const copy = [...array];

    if (ascending) {
        return quickSortAscending(copy);
    }
    else if (!ascending) {
        return quickSortDescending(copy);
    }
    else {
        throw new Error('Invalid order. Use "true" or "false".');
    }

}
function quickSortAscending(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSortAscending(left), pivot, ...quickSortAscending(right)];
}

function quickSortDescending(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}


module.exports = {
    numericArraySort
};