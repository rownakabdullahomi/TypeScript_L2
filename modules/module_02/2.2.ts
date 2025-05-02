{
// interface

type User1 = {
    name : string;
    age: number;
}

interface User2 {
    name: string;
    age: number;
}

type UserWithRole1 = User1 & {role: string};

interface UserWithRole2 extends User1 {
    role: string;
}


const user1: UserWithRole1 = {
    name: "Rownak",
    age: 30,
    role: "Student"
}
const user2: UserWithRole2 = {
    name: "HAsan",
    age: 35,
    role: "Instructor"
}

type rollNumber = number;

// array ---> object, function ---> object

type Roll1 = number[];

interface Roll2 {
    [index: number] : number;
}


const rollNumbers1: Roll1 = [12, 34, 76];
const rollNumbers2: Roll2 = [32, 47, 89, 40];
















}