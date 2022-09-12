class Car {
    //single constructor implementation
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
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
var car2 = new Car("Audi", 120, 6);
console.log("car2", car2);
