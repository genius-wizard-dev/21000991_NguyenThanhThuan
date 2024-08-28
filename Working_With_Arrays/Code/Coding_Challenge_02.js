const dogs = [5, 2, 4, 1, 15, 8, 3]
// const dogs = [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = (dogs) => {
    const humanAge = dogs.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const newHumanAge = humanAge.filter((human) => human >= 18);
    const averageHumanAge = newHumanAge.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / newHumanAge.length;
    return [averageHumanAge, newHumanAge];
}

const [averageHumanAge, newHumanAge] = calcAverageHumanAge(dogs);
console.log(newHumanAge);
console.log(averageHumanAge);



