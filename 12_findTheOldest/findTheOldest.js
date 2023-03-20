const findTheOldest = function(arr) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const updateArr = arr.map(item => {
    if (item.yearOfDeath = null) {
      item.yearOfDeath = currentYear;
    }
  })  
  const newArr = updateArr.map(item => (
        {...item, age: item.yearOfDeath - item.yearOfBirth}
      ))
      const ageArr = []
      newArr.forEach(element => {
        ageArr.push(element.age)
      });
  let oldest = newArr.reduce((old, person) => {
      if(person.age === Math.max.apply(null, ageArr)) {
        old = person
      }
      //console.log(old)
      return old;
  }, {});
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
