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
  
class NCycle<T> extends Vehicle {
  private make: T | T[] | string;
  private model: T | T[] | string;

  constructor(make: T | T[] | string, model: T | T[] | string) {
    super(make as string, model as string, "n");
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

import { NCycle } from './index.ts';

describe('NCycle class', () => {
  it('should create an NCycle object with single make and model', () => {
    const ncycle = new NCycle('Honda', 'CBR500R');
    expect(ncycle.make).toBe('Honda');
    expect(ncycle.model).toBe('CBR500R');
  });

  it('should create an NCycle object with array make and model', () => {
    const ncycle = new NCycle(['Honda', 'Yamaha'], ['CBR500R', 'R6']);
    expect(ncycle.make).toEqual(['Honda', 'Yamaha']);
    expect(ncycle.model).toEqual(['CBR500R', 'R6']);
  });

  it('should print a message for a single make and model', () => {
    const ncycle = new NCycle('Honda', 'CBR500R');
    console.log = jest.fn();
    ncycle.print();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('This is a Honda CBR500R NCycle.');
  });

  it('should print a message for an array make and model at a specific index', () => {
    const ncycle = new NCycle(['Honda', 'Yamaha'], ['CBR500R', 'R6']);
    console.log = jest.fn();
    ncycle.print(0);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('This NCycle has a Honda CBR500R at 0.');
  });

  it('should print a message for all makes and models in an array', () => {
    const ncycle = new NCycle(['Honda', 'Yamaha'], ['CBR500R', 'R6']);
    console.log = jest.fn();
    ncycle.printAll();
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, 'This NCycle has a Honda CBR500R at 0.');
    expect(console.log).toHaveBeenNthCalledWith(2, 'This NCycle has a Yamaha R6 at 1.');
  });

  it('should handle invalid input', () => {
    const ncycle = new NCycle('Honda', ['CBR500R', 'R6']);
    console.log = jest.fn();
    ncycle.print();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('This NCycle was not created properly.');
  });
});