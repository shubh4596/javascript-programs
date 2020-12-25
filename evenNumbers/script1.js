function even(n)
{
    let i = 2 , count = 0;
    while(i<=n)
    {
        i = i + 2;
        count++;
    }
    return count;
}

let num = Number(prompt("Enter the higer range"));
let totalEvenNumbers = even(num);
document.write(totalEvenNumbers);