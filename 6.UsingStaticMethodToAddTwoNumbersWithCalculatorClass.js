class Calculator{
    static add(n1, n2){
        return n1+n2;
    }
}
let obj1=new Calculator();
let result=Calculator.add(7, 8);
console.log(result);