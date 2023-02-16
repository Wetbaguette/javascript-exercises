const palindromes = function (string) {
    let newStr = string.toLowerCase()
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "");
      let arr = [...newStr];
      let word = arr.reverse().join('');
    if (word ===  newStr) {
        return true;
      } else {
        return false;
      }
    };

// Do not edit below this line
module.exports = palindromes;
