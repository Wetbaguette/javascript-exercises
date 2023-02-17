const fibonacci = function(num) {
    let arr = [];
    let result;
    if (num < 0) {
        return 'OOPS';
    }
    for (let i = 0; i <= num; i++){
      if (arr.length === 0) {
        arr.push(1);
        arr.push(1);
      } else {
        result = arr[arr.length - 2] + arr[arr.length - 1];
        arr.push(result);
      }
    }
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
