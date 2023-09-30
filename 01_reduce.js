// reduce
// Takes a callback as 1st arg and accumulator as second argument and returns a reduced value or single value

Array.prototype.myReduce = function(callback, acc = 0) {
    const values = this;
    let result = acc;
    values.forEach(ele => {
      result = callback(result, ele)
    })
    return result
 }
 
 const newArr = [5,6,7]
 
 newArr.myReduce((acc, ele) => acc + ele, 10)
 
 const s1 = ['s','i', 'd']
 
 s1.reduce((acc, ele) => acc + ele, 'Mr.')