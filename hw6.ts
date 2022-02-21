import {IUserinterface} from "./interfaces/IUserinterface";

const user : IUserinterface = {
    name: "Max",
    age: 18,
    gender: 'Male'
}

const sum = (a:number ,b:number) : number =>{
    return a + b
}
const showSum = (a:number,b:number) : void =>{
    console.log(a + b)
}
const incAge = (user : Partial<IUserinterface>,inc : number): Partial<IUserinterface> => {
    user.age += inc
    return user
}


console.log(sum(44,22))
showSum(2,3)
incAge(user,2)
console.log(user)
