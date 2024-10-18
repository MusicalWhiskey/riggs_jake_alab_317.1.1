class Vehicle {
  status: 'started' | 'stopped' = "stopped";
  make: string;
  model: string;
  wheels: number | string;
  
    constructor(make: string, model: string, wheels: string | number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {

      this.status = "started";
    }

    stop() {
      this.status = "stopped";
    }
  }
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, "four");
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle): void {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());

  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = Number(myBuick.wheels) - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  
class NCycle<T> {
  private make: T | T[] | string;
  private model: T | T[] | string;
    constructor(make: T | T[], model: T | T[]) {
      this.make = make;
      this.model = model;
  }

  print(index: number = 0): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) && Array.isArray(this.model) && index < this.make.length && index < this.model.length) {
      console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
      }
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}

