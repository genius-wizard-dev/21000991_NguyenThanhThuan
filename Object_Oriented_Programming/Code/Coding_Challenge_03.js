function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);

console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
