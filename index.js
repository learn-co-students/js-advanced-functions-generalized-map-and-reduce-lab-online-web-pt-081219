// Add your functions here 
function map(src, cb) {
    let r = []
    for (let i =0; i < src.length; i++){
        let theElement = src [i]
        r.push(cb(theElement))
    }
    return r
}

// cb means callback





function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }




// function reduce(src, cb, starting){
//     let r = (!!starting) ? starting : src[0]
//     // above returns true or false values (left true right false)
//     let i = (!!starting) ? 0 : 1
// //   above returns true value present or no true present
//     for (; i < src.length; i++) {
//       r = cb(src[i], r)
//     }
  
//     return r;
