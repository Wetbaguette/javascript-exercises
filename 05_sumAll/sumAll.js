const sumAll = function(firstNum, secondNum) {
    let totalSum = 0
      if (typeof firstNum === "number" && typeof secondNum === "number") {
          if (firstNum < 0 || secondNum < 0) {
              totalSum = "ERROR"
          } else if (firstNum >= secondNum) {
              for (let i = secondNum; i <= firstNum; i++) {
                  totalSum += i;
              }
          } else if (firstNum <= secondNum) {
              for (let i = firstNum; i <= secondNum; i++) {
                  totalSum += i;
              }
          }
      } else {
        totalSum = "ERROR"
      }    
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
