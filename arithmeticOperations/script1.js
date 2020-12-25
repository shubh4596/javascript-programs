class Arithmetic{
    constructor(n1 , n2){
        this.num1 = n1;
        this.num2 = n2;
    }

    arithmetic(){
        console.log(num1+num2);
        console.log(num1-num2);
        console.log(num1*num2);
        console.log(num1/num2);
    }
}

let num1 = Number(prompt("Enter number 1"));
let num2 = Number(prompt("Enter number 2"));

let aithmetic1 = new Arithmetic(num1 , num2);
aithmetic1.arithmetic();