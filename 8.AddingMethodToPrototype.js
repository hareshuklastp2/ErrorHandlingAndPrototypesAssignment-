let student={
    name:"",
    printDetails:function (){
        console.log(`Hello, my name is ${this.name}`);
    }
};

let student1=Object.create(student);
student1.name="Mithun";
student1.printDetails();