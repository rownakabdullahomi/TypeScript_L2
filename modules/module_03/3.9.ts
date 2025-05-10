{
  // abstraction ---> 1. interface 2. abstract

  // idea
  interface Vehicle1 {
    // name: string;
    // model: number;
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vehicle1: Vehicle1 = {
  //     name: 'Toyota',
  //     model: 2010,
  // }

  // real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the engine`);
    }
    move(): void {
      console.log(`I am moving`);
    }
    test() {
      console.log(`I am testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();

  // abstract class (idea)
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am testing`);
    }
  }

  class TataCar extends Vehicle2{
    startEngine(): void {
        console.log(`Tata car is starting the engine`);
    }
    stopEngine(): void {
      console.log(`Tata car is stopping the engine`);
    }
    move(): void {
      console.log(`Tata car is moving`);
    }
  }

//   const hondaCar = new Vehicle2();

//   hondaCar.startEngine();



































}
