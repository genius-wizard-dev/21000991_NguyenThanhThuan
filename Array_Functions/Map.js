const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.newMap = function(callback) {
    var newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}   

const a = arr.map((item) => item * 2)
console.log(a)

const b = arr.newMap((item) => item * 2)
console.log(b)