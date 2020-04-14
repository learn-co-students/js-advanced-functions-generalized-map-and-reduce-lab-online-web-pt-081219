// Add your functions here
function map(array, param){
    let solution = array.map(function(element){ 
        return param(element)});
    return solution;
}
function reduce(array, newfunc, startingPoint = 0){

    let reduction = !!startingPoint ? startingPoint : array[0];
    let i = !!startingPoint ? i = 0 : i = 1;

    for (i; i < array.length; i++){
        reduction = newfunc(array[i], reduction)
    }

    return reduction;
} 