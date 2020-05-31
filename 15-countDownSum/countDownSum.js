class MySolution {
  countDownSum(num) {
    // Insert code here;
    return (num == 0 || num == 1) ? num : num + this.countDownSum(num -1);

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;