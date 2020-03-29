// Add your functions here
function map(array, fn){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(fn(array[i]))
    }

    return newArray
}

function reduce(array, fn, startingPoint = 0){

    let reduction = !!startingPoint ? startingPoint : array[0];
    let i = !!startingPoint ? i = 0 : i = 1;

    for (i; i < array.length; i++){
        reduction = fn(array[i], reduction)
    }

    return reduction;
}