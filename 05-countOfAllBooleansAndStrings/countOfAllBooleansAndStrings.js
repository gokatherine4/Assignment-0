function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
let count = 0;
for(i = 0; i < arr.length; i++){
  if(arr[i] === true || arr[i] === false || typeof(arr[i])){
    count++;
  }
return count;
}
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;