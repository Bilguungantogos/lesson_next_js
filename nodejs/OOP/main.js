// const cars = {
//   id: 1,
//   name: "BMW",
//   printName: function () {
//     console.log(this.name);
//   },
// };
// cars.printName();

//Class Declaration
class Car {
  constructor(name, color, velocity) {
    console.log("CONSTRUCTOR");
    this.name = name;
    this.color = color;
    this.velocity = velocity;
  }

  fullInfo() {
    console.log("Car name: ", this.name);
    console.log("Car color: ", this.color);
    console.log("Car velocity: ", this.velocity);
  }
  getName(role) {
    if (role == "seller") {
      return this.name;
    } else {
      console.log("No Permission");
    }
  }
  setName(name) {
    this.name = name;
  }
}

const car = new Car("BMW", "red", 200); //object -> instance
const car2 = new Car("Benz", "yellow", 300);

car.fullInfo();
car2.fullInfo();

console.log("===================");
car.getName();
console.log("===================");

class Bus extends Car {
  constructor({ name, color, velocity, capacity }) {
    super(name, color, velocity);
    this.capacity = capacity;
  }
  //override
  fullInfo() {
    console.log("Car name: ", this.name);
    console.log("Car color: ", this.color);
    console.log("Car velocity: ", this.velocity);
    console.log("Car capacity: ", this.capacity);
  }
}

const b1 = new Bus({
  capacity: 40,
  name: "Hino",
  color: "blue",
  velocity: 1000,
});
b1.fullInfo();
