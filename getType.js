
/* 
    to get the type of data passed for sorting
*/
function getType(data){
    return typeof data;
}

/*
    to check if the data passed is an array
*/
function isArray(value) {
    return Array.isArray(value);
}

module.exports = {
    getType,
    isArray
  };