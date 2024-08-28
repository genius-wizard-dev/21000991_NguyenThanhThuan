// Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];


const checkDogs = function(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();    
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach((dog, index) => {
        if(dog >= 3) {
            console.log((`Con chó số ${index + 1} là con chó trưởng thành, và nó được ${dog} tuổi`));
        }
        else {
            console.log((`Con chó số ${index + 1} là con chó con, và nó được ${dog} tuổi`));
        }
    });
}

checkDogs(juliaData, kateData);

