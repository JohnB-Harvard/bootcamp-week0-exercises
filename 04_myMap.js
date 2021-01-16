/**
  Implement your own version or Array.map()
  The function should take as input:
    an array: arr
    a function: f
  The function should output a new list that is arr, but with the function applied to each element
  Try recursion rather than a for loop!
  Example:
    myMap([1, 2, 3], v => v * 2)
    -> [2, 4, 6]
 */

const myMap = (arr, f) => {
  /**Using a for loop:
  let newarr = arr;
  for(i=0;i<newarr.length;i++){
    newarr[i] = f(newarr[i]);
  }
    return newarr;
  */

  /** Using forEach
  let output = [];
  arr.forEach((v)=>output.push(f(v)));
  return output;
  */
  
  //using recursion
  const [head, ...tail] = arr;
  if(tail.length === 0){
    console.log('Made it here');
    return f(head);
  }
  return [f(head)].concat(myMap(tail, f));
  
}

module.exports = myMap
