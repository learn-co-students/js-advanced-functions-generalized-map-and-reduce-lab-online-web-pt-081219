// Add your functions here
let map = function(array, fb){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(fb(array[i]))
    }
    return newArray

}

let reduce = function(array, fb, sp){
    let i = sp ? 0 : 1
    let total = sp ? sp : array[0]
    for (; i < array.length; i++){
        total = fb(array[i], total)
    }
    return total
}