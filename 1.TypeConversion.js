let convertToNumber=(strNum)=>{
    try {
        if(isNaN(strNum)){
            throw new Error();
        }else{
            console.log(parseInt(strNum));
        }
    } catch {
     console.log("invalid number");   
    }
}

convertToNumber("123");
convertToNumber("abc");

