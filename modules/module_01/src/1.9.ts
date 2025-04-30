{
// Type Alias

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
    isMarried: boolean;
}


const student1: Student = {
    name: "Rownak",
    age: 30,
    gender: "male",
    contactNo: "01500000000",
    address: "Dhaka",
    isMarried: true,
}
const student2: Student = {
    name: "Hasan",
    age: 30,
    gender: "male",
    address: "Dhaka",
    isMarried: true,
}

type UserName = string;
type IsAdmin = boolean;

const name: UserName = "Rahman";
const isAdmin: IsAdmin = true;

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2)=>{
    return num1 + num2;
}





















}