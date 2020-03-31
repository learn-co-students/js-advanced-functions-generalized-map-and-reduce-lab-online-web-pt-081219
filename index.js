// Add your functions here
// In this lab, you should write a generalized map and reduce function. Both of these functions will take an Array and a function and require that you pass information between the function and the callback. Write your code in the index.js file.

// map
function map(arr, func) {
    const thisArr = []
    arr.forEach(element => {
        thisArr.push(func(element))
    });
    return thisArr
}


// reduce
//Your implementation should expect a source array and optionally a starting value. All the tests will pass an Array and (sometimes) a starting point.
function reduce(arr, func, start) {
    let x = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1
    for (; i < arr.length; i++) {
        x = func(arr[i], x)
    }
    return x;
}

