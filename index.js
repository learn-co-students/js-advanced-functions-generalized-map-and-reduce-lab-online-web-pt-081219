// Add your functions here

function map(sourceArray, func) {
    let array = []
    for (let i = 0; i < sourceArray.length; i++) {
        let item = sourceArray[i]
        array.push(func(item))
    }
    return array
}

function reduce(sourceArray, func, start) {
    let array = (!!start) ? start : sourceArray[0]
    let i = (!!start) ? 0 : 1
    for (; i < sourceArray.length; i++) {
        array = func(sourceArray[i], array)
    }
    return array
}