// Add your functions here
function map(array, fn){
    let result = [];

    for(const el in array){
        let value = fn(array[el]);
        result.push(value)
    }

    return result;
}

function reduce(array, fn, starting){
    let result = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < array.length; i++) {
      result = fn(array[i], result)
    }
  
    return result;
  }