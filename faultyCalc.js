
let a;

a= prompt("Enter a");
let b= prompt("Enter b");

for (let i=0;; i++){
    let rand= Math.random();
    if(rand<0.1){
        console.log("a+b= ", a-b);
        console.log("a-b= ", a/b);
        console.log("a*b= ", a+b);
        console.log("a/b= ", a**b);
        break;
    } 
    else {
        console.log("a+b= ", a+b);
        console.log("a-b= ", a-b);
        console.log("a*b= ", a*b);
        console.log("a/b= ", a/b);
    }  
}

