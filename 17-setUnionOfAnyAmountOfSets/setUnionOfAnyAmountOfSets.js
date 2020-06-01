function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let mySet = new Set();
  for (let i = 0; i < args.length; i++){
    for (let element of args[i]){
      mySet.add(element);
    }
  }
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;