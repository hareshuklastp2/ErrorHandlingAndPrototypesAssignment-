let getPerson=(person)=>{
    try {
        if(person['name']!==undefined){
            if(person['age']!==undefined){
                return `Name:<${person.name},Age:<${person.age}>>`
            }else{
                throw new Error("Invalid parameter type");
            }
        }else{
            throw new Error("Invalid parameter type");
        }
    } catch (error) {
        return error.message;
    }
}
console.log(getPerson({name: "Mithun", age: 20}));
console.log(getPerson({name: "Mithun"}));
console.log(getPerson(["name", "Mithun"]));