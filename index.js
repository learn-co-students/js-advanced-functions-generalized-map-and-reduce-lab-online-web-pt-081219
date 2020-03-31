// Add your functions here

//MAP
function map(sourceArray,fun) {
    let newSource = []
    sourceArray.forEach(element => newSource.push(fun(element)));
    return newSource;
}

//REDUCE
function reduce(sourceArray, fun, startingPoint) {
    let result = (!!startingPoint) ? startingPoint : sourceArray[0];
    let i = (!!startingPoint) ? 0 : 1;
    for(i; i < sourceArray.length; i++) {
        result = fun(sourceArray[i], result);
    }
    return result;
}