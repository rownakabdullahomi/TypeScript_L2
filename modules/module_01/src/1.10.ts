{
  // union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const frontendDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "o+" | "b+" | "ab+" | "a+";
  };

  const user1: User = {
    name: "Rownak",
    gender: "male",
    bloodGroup: "o+"
  }
















  
}
