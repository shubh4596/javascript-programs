let n = Number(prompt("Enter a number"));
let count = 0;
while(n>0)
{
   count++;
   n = Math.floor(n/10);
}

document.write(count);
