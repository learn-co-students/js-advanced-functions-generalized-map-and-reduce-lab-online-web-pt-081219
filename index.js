// Add your functions here

function map(array, fn) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(fn(array[i]))
    }
    return output
}

function reduce(array, fn, start = 0) {
    let output = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1;
    for ( ; i < array.length; i++) {
        output = fn(array[i], output)
    }
    return output
}