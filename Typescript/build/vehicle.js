class Car {
    applyBrakes(value) {
        this.speed -= value;
    }
}
var car1 = new Car();
car1.name = "BMW";
car1.speed = 160;
car1.gears = 7;
console.log("car1", car1.name, car1.speed, car1.gears);
car1.applyBrakes(40);
console.log("car1", car1.name, car1.speed, car1.gears);
