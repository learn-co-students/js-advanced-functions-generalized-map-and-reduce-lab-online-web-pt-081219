function map(array, func) {
  let newArr = []
  for (let x in array) {
    newArr.push(func(array[x]))
  }
  return newArr
};


function reduce(array, func, intial) {
  let result = (!!intial) ? intial : array[0]
  
  for (let i = (!!intial) ? 0 : 1; i < array.length; i++) {
    result = func(array[i], result)
  }
  return result
};
