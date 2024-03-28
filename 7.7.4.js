function setFullName(fullName, person) { person.fullName = fullName; }
const setPersonFullName = setFullName.bind(null, "Leon Madsen");
setPersonFullName(person);