{
// generic type

type GenericArray<T> = Array<T>

// const rollNumbers: number[] = [2, 5, 8];
const rollNumbers: GenericArray<number> = [2, 5, 8];

// const mentors: string[] = ['mr. x', 'mr. y', 'mr. z'];
const mentors: GenericArray<string> = ['mr. x', 'mr. y', 'mr. z'];

// const boolArray: boolean[] = [true, false, true];
const boolArray: GenericArray<boolean> = [true, false, true];


const user: GenericArray<{name: string, age: number}>= [
    {
        name: "Rownak",
        age: 30,
    },
    {
        name: "Jhankar",
        age: 45,
    }
]














}