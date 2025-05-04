{
  // constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "NLWD";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    type: string;
  }>({
    id: 345,
    name: "Mr. X",
    email: "x@gmail.com",
    type: "Next Level",
  });
  const student2 = addCourseToStudent({
    id: 896,
    name: "Mr. Y",
    email: "x@gmail.com",
    hasWatch: "1+",
  });



  
}
