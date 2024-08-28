const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


Array.prototype.newFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}

const a = arr.find((item) => item % 2 === 0)
console.log(a)

const b = arr.newFind((item) => item % 2 === 0)
console.log(b)