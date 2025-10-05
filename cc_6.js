// created class system
class employee {
constructor(name,dept){
    this.name=name;
    this.department=dept;
}
describe(){
    return `${this.name} works in the ${this.department}`;
}
}
//described the name and the department of employee

class managers extends employee {
    constructor(name,dept,teamSize){
    super(name,dept);
    this.teamSize=teamSize;
    
}
describe(){
    return `${this.name} is in the ${this.department} department and has a team of ${this.teamSize}`;
}
}

//added team size to the manager title
const emp= new employee("Dave", "Accounting");
const emp1= new employee ("Von","Janitor");
const man= new managers("Jim", "Managial", 8);
//subclass created for employees and managers


class company{
    constructor(){
    this.employees=[]; 
}

addEmployee(employee){
    this.employees.push(employee)
}

listEmployees() {
    for(const emp of this.employees){
    console.log(emp.describe());
    }
}
}
// class created with list and add methods

const Co = new company();
Co.addEmployee(emp, man, emp1);


Co.listEmployees();
//add workers and company obj
