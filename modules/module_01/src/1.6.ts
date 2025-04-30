// Functions

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(4, 6);

const addNum = (num1: number, num2: number): number => {
  return num1 + num2;
};

const poorUser = {
  name: "Rownak",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4];

const newArray: number[] = arr.map((num: number): number => num * num);
