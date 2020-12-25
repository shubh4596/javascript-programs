function factorial(n){
  let p = 1;
  while(n>0)
  {
      p = p*n;
      n--;
  }
  return p;
}

let num = Number(prompt("Enter a number"));
let factorial_of_number = factorial(num);
document.write(factorial_of_number);