class Car{
    #company;
    #model;
    #year;
    constructor(company, model, year){
        this.company=company;
        this.model=model;
        this.year=year;
    }
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

let myCar=new Car("Skoda", "Rapid", 2022);
console.log(myCar.getDescription());