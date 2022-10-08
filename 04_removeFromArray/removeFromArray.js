const removeFromArray = function(arr, ...remove) {
    let newArr = arr;
      for (let i = 0; i < remove.length; i++) {
          if (arr.includes(remove[i])) {
              if (arr.indexOf(remove[i]) < 0) {
                  return;
              } else {
                  arr.splice(arr.indexOf(remove[i]), 1);
              }
          };
        }    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
