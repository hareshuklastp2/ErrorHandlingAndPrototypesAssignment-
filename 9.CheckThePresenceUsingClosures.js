let numberChecker=(arr)=>{
    let checkNum=(num)=>{
        for(e of arr){
            if(num===e)
            return true;
        }
        return false;
    };
    return checkNum;
};

const arr=[2,5,1,6,9];
const checkNum=numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));