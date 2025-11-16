//spread operators

const friends = ["X", "Y", "Z"];

const schoolFriends = ["A", "B", "C"];
const collageFriends = ["D", "E", "F"];

friends.push(...collageFriends);
friends.push(...schoolFriends);
console.log(friends);

const user = {
  name: "Mr. X",
  age: 24,
};

const otherInfo = {
  hobby: "reading",
  isMarried: false,
};

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

//rest operators

// const inviteFriends = ( friends1 : string, friends:string, friends3: string) =>{
//   console.log(`Inviting ${friends1}, ${friends}, and ${friends3} to the party.`);
// }

// inviteFriends('A', 'B', 'C', "D");
const inviteFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Inviting ${friend} to the party.`);
  });
};

inviteFriends("A", "B", "C", "D");
