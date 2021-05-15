// Filter
// Takes a callback and returns an element
// Callback returns a logical expression
Array.prototype.myFilter = function(callback) {
    const values = this
    let resultValue = null
    for(let i=0; i<values.length; i++) {
      const eachValue = callback(values[i]) // True | False
      if(eachValue) {
        resultValue = values[i]
      }
    }
    return resultValue
  }
  
  arr.myFilter(ele => ele === 3)