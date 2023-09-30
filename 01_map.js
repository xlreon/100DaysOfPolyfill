// map
// Take is available in array prototype and it takes a callback in its arguments and returns an array back

// myMap - Array.prototype.myMap arr.myMap

Array.prototype.myMap = function(callback) {
    const values = this
    let resultArr = []
    for(let i=0; i<values.length; i++) {
      const eachValue = callback(values[i])
      resultArr.push(eachValue)
    }
    return resultArr;
  }
  
  arr.myMap(ele => ele + 1)