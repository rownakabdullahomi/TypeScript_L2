"use strict";
{
    // destructuring
    const user = {
        id: 45192,
        name: {
            firstName: "Rownak",
            middleName: "Abdullah",
            lastName: "Omi",
        },
        contactNo: "01500000000",
        address: "Dhaka",
    };
    const { contactNo: phoneNo, name: { middleName: midName }, } = user;
    //   array
    const myFriends = ["rahim", "karim", "hasan", "rahman", "mahmud", "rasel"];
    const [, , bestFriend, ...restOtherFriends] = myFriends;
    console.log(bestFriend, restOtherFriends);
}
