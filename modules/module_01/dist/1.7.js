"use strict";
{
    // spread operator
    const bros1 = ["sajan", "rupak", "shovon"];
    const bros2 = ["tonmoy", "himel", "robin"];
    bros1.push(...bros2);
    console.log(bros1);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Rest operator
    const greetFriends = (...friends) => {
        // console.log(`hi ${friend1, friend2, friend3 }`);
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greetFriends("Abul", "Kabul", "Babul", "ubul", "habul");
}
