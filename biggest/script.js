let num1 = Number(prompt("enter a number"));
let num2 = Number(prompt("enter a number"));
biggestOfTwoNumbers(num1 , num2);

function biggestOfTwoNumbers(n1 , n2){
    if(n1>n2)
    {
        document.write(`bigger number is ${n1}`);
    }
    else{
        document.write(`bigger number is ${n2}`);
    }
}