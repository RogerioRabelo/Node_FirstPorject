const { Person } = require("./person");

// require("./modeules/path");
require("./modeules/fs");
const person = new Person("Rogério");
console.log(person.sayMyName());
