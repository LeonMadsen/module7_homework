function filterAge(userList, age) {
const filteredUsers = [];
for (let i = 0; i < userList.length; i++) {
if (userList[i].age >= 18) {
  filteredUsers.push(userList[i]);
}
}
return filteredUsers;
}
function extractNames(userList) {
const names = [];
for (let i = 0; i < userList.length; i++) {
names.push(userList[i].name);
}
return names;
}
const users = [
{
name: "Anna",
age: 30
},
{
name: "Ivan",
age: 31
},
{
name: "Leon",
age: 17
},
];
console.log(filterAge(users, 18)); 
console.log(extractNames(users)); 