const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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
  ];
  
  const findTheOldest = function (people) {
    const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
    const oldest = people.sort((a, b) =>
      age(a) > age(b) ? -1 : 1
    );
    return oldest[0];
  };
  
  console.log(findTheOldest(people));



// Do not edit below this line
module.exports = findTheOldest;
