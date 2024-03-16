
function factorial(num) {
    if(num<0){
        return "Factorial is not defined for Negative Numbers"
    }
    return Array.from({length:num},(_,index)=> index+1).reduce((a, b) => a * b)
}

let a = 7;
console.log(factorial(a));