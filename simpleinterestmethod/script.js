let amt = Number(prompt("Enter the amount"));
let rate = Number(prompt("Enter the rate of interest"));
let time = Number(prompt("Enter the time"));

function getSI(p , r , t){
    let si = (p*r*t)/100;
    return si;
}

let simpleInterest = getSI(amt , rate , time);
document.write(`The simple interest is ${simpleInterest}`);