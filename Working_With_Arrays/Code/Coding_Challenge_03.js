const dogs = [5, 2, 4, 1, 15, 8, 3]
// const dogs = [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = (dogs) => {
    return dogs
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

const averageHumanAge = calcAverageHumanAge(dogs);
console.log(averageHumanAge);
