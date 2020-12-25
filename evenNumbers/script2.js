function even(n)
{
    let i = 2 , sum = 0;
    while(i<=n)
    {
        sum = sum + i
        i = i+2;
    }
    return sum;
}

let num = Number(prompt("Enter the higer range"));
let sumEvenNumbers = even(num);
document.write(`Sum of even integers is ${sumEvenNumbers}`);