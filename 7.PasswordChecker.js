class User{
    #username;
    #password;
    constructor(username){
        this.username=username;
    }
    setPassword(password){
        try {
        if(password.length<8)
        throw new Error("Password must be 8 length 8 characters long and contains at least one number and oneuppercase letter.");
        let oneNum=false;
        let oneUpperCase=false;
        [...password].map((ch)=>{
            if(ch>='0'&&ch<='9') oneNum=true;
            if(ch>='A'&&ch<='Z') oneUpperCase=true;
        })
        if(!oneNum||!oneUpperCase)throw new Error("Password must be 8 length 8 characters long and contains at least one number and oneuppercase letter.");
        this.#password=password;
        } catch (error) {
            console.log(error.message);
        }
    }

    getPassword(){
        if(this.#password===undefined)
        return undefined;
        let regEx=/\w/g;
        let pass=this.#password;
        return pass.replace(regEx, "*");
    }
}

let user1=new User("hareshukla");
user1.setPassword("Password");
user1.setPassword("password");
user1.setPassword("Password123");
console.log(user1.getPassword());

