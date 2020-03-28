function map(arry, block) {
    let output = arry.map(function(element) { return block(element) })
    return output
}

// function reduce(arry, cb, start=0) {
//     if (typeof(arry[0]) === "number" )
//     { return arry.reduce(cb, start) }
// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }