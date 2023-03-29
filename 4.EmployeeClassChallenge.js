class Employee{
    name;
    position;
    salary;
    constructor(name, position, salary){
        this.name=name;
        this.position=position;
        this.salary=salary;
    }
    getSalary(){
        return this.salary;
    }
}

let employee1=new Employee("Mohan", "manager", 48000);
console.log(employee1.getSalary());