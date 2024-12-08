const findTheOldest = function(people) {
    let max_age = 0;
    let oldestPerson = null;

    people.forEach( person => {
        const age = person.yearOfDeath - person.yearOfBirth;

        if (age>max_age) {max_age = age; oldestPerson = person.name};
    });
    return oldestPerson;
};
console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]))
// Do not edit below this line
module.exports = findTheOldest;
