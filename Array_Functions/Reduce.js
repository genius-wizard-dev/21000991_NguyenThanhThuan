const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.newReduce = function(callback, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

const a = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(a);

const b = arr.newReduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(b);

