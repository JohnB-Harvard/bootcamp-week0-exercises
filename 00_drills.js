// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  let newstr="";
  let l = str.length-1;
  for(i=l;i>=0;i=i-1){
    newstr = newstr+str[i];
  }
  return newstr;
}
// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  if(num == 0){
    return 1;
  }
  else if(num>0){
    let product = 1;
    for(i=1;i<=num;i++){
      product = product*i;
    }
    return product;
  }
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if(arr1.length != arr2.length){
    return -1;
  }
  else{
    let newarr=[];
    for(i=0;i<arr1.length;i++){
      newarr.push([arr1[i],arr2[i]]);
    }
    return newarr;
  }
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let numarr = arr[1].length;
  let arrays=[];
  for(i = 0;i<numarr;i++){
    let newarr = [];
    for(j=0;j<arr.length;j++){
      newarr.push(arr[j][i])
    }
    arrays.push(newarr)
  }
  return arrays;
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
  num=num%str.length;
  return str.substring(str.length-num)+str.substring(0,str.length-num);
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  let date = new Date();
  let months = {
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December",
  }
  let num = date.getDate();
  let ext = "";
  if(num%10 == 1){
    ext = "st";
  }
  else if(num%10 == 2){
    ext = "nd"
  }
  else{
    ext = "th"
  }

  let timeext="";
  if(date.getHours()<11){
    timeext=" in the morning.";
  }
  else{
    timeext=" in the afternoon.";
  }

  return "Today's date is "+months[date.getMonth()]+" "+num+ext+", "+date.getFullYear()+". It is "+date.getHours()%12+":"+date.getMinutes()+timeext;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
