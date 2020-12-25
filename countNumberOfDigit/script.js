function countNumberOfDigits(n) 
{
    let count = 0;
    while(n>0)
    {
        count++;
        n = Math.floor(n/10);
    }
    return count;
}

let num = Number(prompt("Enter the number"));
let totalDigits = countNumberOfDigits(num);
document.write(totalDigits);