function printInfo(full) {
console.log(`"Name: ${this.name}, Age: ${this.age}"`);
}
const person = {
name: "Leon",
age: 37,
};
printInfo.call(person);