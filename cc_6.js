// created class system
class employee {
constructor(name,dept){
    this.name=name;
    this.department=dept;
}
describe(){
    return '${this.name} is in the ${this.department}';
}
//described the name and the department of employee
}
class managers extends employee {
    constructor(name,dept){
    super(name);
    super(dept);
    this.teamSize=teamSize;
}
}

//added team size to the manager title
const emp= new employee("Dave", "Accounting");
const emp1= new employee ("Von","Janitor");
const man= new managers("Jim", "Manager", 8);
//subclass created for employees and managers


class company{
    constructor(){
    this.employees=[]; 
}

addEmployee(employee){
    this.employees.push(employee)
}

listEmployees() {
    for(emp of this.employees)
    console.log(employee.describe());
}
}
// class created with list and add methods

const Co = new company();
Co.addEmployee(emp,emp1,man);

Co.listEmployees();
//add workers and company obj
