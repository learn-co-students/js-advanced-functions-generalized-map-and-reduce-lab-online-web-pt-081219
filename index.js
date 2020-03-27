// Add your functions here

//MAP
function map(sourceArray,fun) {
    let newSource = []
    sourceArray.forEach(element => newSource.push(fun(element)));
    return newSource;
}

function reduce(sourceArray, fun, startingPoint = 0) {
    sourceArray.forEach(element => startingPoint = fun(element, startingPoint));
    return startingPoint;
}