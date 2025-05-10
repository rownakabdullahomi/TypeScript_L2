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
  }
}
