{
// interface

type User1 = {
    name : string;
    age: number;
}

type UserWithRole1 = User1 & {role: string};


const user1: UserWithRole1 = {
    name: "Rownak",
    age: 30,
    role: "Student"
}

type rollNumber = number;

interface User2 {
    name: string;
    age: number;
}













}