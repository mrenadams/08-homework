// TODO: Write code to define and export the Employee class
function Employee(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (typeof email !== "string" || !email.trim().length) {
        throw new Error("Expected parameter 'email' to be a non-empty string");
      }
  
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  module.exports = Employee;

  class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`email: ${this.email}`);
    }
  }
  
  const shape = new Employee(,);
  
  shape.printTeam();
  