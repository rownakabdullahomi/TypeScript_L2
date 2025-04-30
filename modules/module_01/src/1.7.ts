{
    // spread operator
    const bros1: string[] = ["sajan", "rupak", "shovon"];
    const bros2: string[] = ["tonmoy", "himel", "robin"];

    bros1.push(...bros2);

    console.log(bros1);

    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    }

    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // Rest operator


}