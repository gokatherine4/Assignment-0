function frequencyCounter(word) {
  // Insert code here;

  var freq = {};

  for (var i = 0; i < word.length; i++){
    var character = word.charAt(i);
  }
if (frequency[character]){
  frequency[character]++;
}
else
{
frequency[character] = 1;
}
return freq;
}
// Do not edit this line;
module.exports = frequencyCounter;