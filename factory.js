function createEmployee(name, position, salary) {
    const employee = {}; 
    employee.name = name;
    employee.position = position;
    employee.salary = salary;
  
    employee.getInfo = function() {
      return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    };
  
    employee.promote = function(newPosition, newSalary) {
      this.position = newPosition;
      this.salary = newSalary;
      console.log(`${this.name} has been promoted to ${this.position} with a salary of $${this.salary}`);
    };
  
    return employee; 
  }
  
  const employee1 = createEmployee('Alice Johnson', 'Manager', 60000);
  const employee2 = createEmployee('Bob Smith', 'Developer', 50000);
  const employee3 = createEmployee('Charlie Brown', 'Designer', 55000);
  
  console.log(employee1.getInfo()); 
  console.log(employee2.getInfo()); 
  console.log(employee3.getInfo());
  
  employee1.promote('Senior Manager', 70000);