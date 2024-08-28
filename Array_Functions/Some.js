const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.newSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

const a = arr.some((item) => item % 2 === 0)
console.log(a)

const b = arr.newSome((item) => item % 2 === 0) 
console.log(b)