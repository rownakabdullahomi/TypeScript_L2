{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumbers: number[] = [2, 5, 8];
  const rollNumbers: GenericArray<number> = [2, 5, 8];

  // const mentors: string[] = ['mr. x', 'mr. y', 'mr. z'];
  const mentors: GenericArray<string> = ["mr. x", "mr. y", "mr. z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Rownak",
      age: 30,
    },
    {
      name: "Jhankar",
      age: 45,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];

  const userWithID: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Rownak", email: "a@gmail.com" },
  ];
}
