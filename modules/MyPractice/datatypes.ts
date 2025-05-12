// Primitive Data Types
// String
let studentName: string = "Alice";
studentName = 'Bob';

// Number
const age: number = 28;

// Boolean
let isPassed: boolean = true;

// ------------------------------
// Arrays and Tuples
// Arrays
let scores: number[] = [85, 90, 77, 75];
let names: string[] = ['Rahim', 'Karim', 'Hasan', 'Abul'];
let scores2: Array<number> = [65, 58, 87, 83]
console.log(scores, names, scores2);

// Tuples (fixed length array)
let students: [string, number, boolean] = ['Alice', 21, true];
console.log(`Name: ${students[0]}, Age: ${students[1]}, isPassed: ${students[2]}`);
