"use strict";
// Functions
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(4, 6);
const addNum = (num1, num2) => {
    return num1 + num2;
};
const poorUser = {
    name: "Rownak",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4];
const newArray = arr.map((num) => num * num);
