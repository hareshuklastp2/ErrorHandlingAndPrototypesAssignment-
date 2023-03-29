class Employee{
    
    constructor(name="Unknown", age=0){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

let employee1=new Employee("Mithun", 20);
console.log(employee1.getDetails());
let employee2=new Employee();
console.log(employee2.getDetails());