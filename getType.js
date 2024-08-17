
/* 
    to get the type of data passed for sorting
*/
function getType(data){
    console.log(typeof data);
    return typeof data;
}

function isArray(value) {
    return Array.isArray(value);
}

module.exports = {
    getType,
    isArray
  };