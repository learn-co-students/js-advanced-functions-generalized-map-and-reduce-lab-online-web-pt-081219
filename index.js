// Add your functions here
function map(array, fn) {
    let newArray = []
    for(const el of array) {
        newArray.push(fn(el))
    }
    return newArray
}; 

function reduce(array, fn, optionalStart) {
    let startingPoint = !!optionalStart ? optionalStart : array[0];
    let i = !!optionalStart ? 0 : 1;
    for ( ; i < array.length; i++) {
        startingPoint = fn(array[i], startingPoint)
  
    }
    return startingPoint;
};