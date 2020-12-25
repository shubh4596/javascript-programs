let n1 = Number(prompt("Enter the lower range"));
let n2 = Number(prompt("Enter the higher range"));

while(n1<=n2)
{
    if(n1%2==0)
    {
        document.write(n1 + ",");
    }
    n1++;
}
