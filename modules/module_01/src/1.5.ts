// Reference Types

const user: {
    readonly firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isMarried: true;  // type --> literal types
} = {
    firstName: "Rownak",
    // middleName: "Abdullah",
    lastName: "Omi",
    isMarried: true,
}