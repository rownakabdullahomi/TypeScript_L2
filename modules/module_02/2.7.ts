{
// generic constraint with keyof operator

type Vehicle ={
    bike: string;
    car: string;
    ship: string;
}

type Owner = "bike" | "car" | "ship"  // manually

type Owner2 = keyof Vehicle;


const getPropertyValue =<X, Y extends keyof X> (obj: X, key: Y)=> {
    return obj[key];
}

const user = {
    name: "Rownak",
    age: 30,
    address: "Dhaka"
}

const result = getPropertyValue(user, 'name')


























}