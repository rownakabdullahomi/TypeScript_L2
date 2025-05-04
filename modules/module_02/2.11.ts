{
// utility types


type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
}

// Pick
type NameAge = Pick<Person, "name" | 'age'>;

// Omit
type ContactInfo = Omit<Person, "name" | "age">;

// Required
type PersonRequired = Required<Person>;

// Partial
type PersonPartial = Partial<Person>;

// Readonly
type PersonReadonly = Readonly<Person>;

const person1: Person = {
    name: "Mr. X",
    age: 50,
    contactNo: '015555'
}

// Record
// type MyObj = {
//     a: string;
//     b: string;
// }

type MyObj = Record<string, string>;

const obj1: MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc',
    d: 'dd'
}

const EmptyObj: Record<string, unknown> = {};


















}