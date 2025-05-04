{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const resGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 123,
    name: "Rownak",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 321);

  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "NLWD";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@gmail.com",
    type: "Next Level",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "x@gmail.com",
    hasWatch: "1+",
  });
}
