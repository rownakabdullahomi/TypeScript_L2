{
    // type assertion
    let anything : any;

    anything = "Next level web development";
    // (anything as string)

    const kgToGm = (value: string | number) : string | number | undefined => {
        if(typeof value === "string"){
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`; 
        }
        if(typeof value === "number"){
            return value * 1000;   
        }
    }

    const result1 =  kgToGm(500) as number;
    const result2 =  kgToGm("300") as string;

    type CustomError = {
        message : string;
    }

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }

}