let principal_amount = Number(prompt("Enter the amount"));
let rate = Number(prompt("Enter the rate of interest"));
let time = Number(prompt("Enter the time"));

let simpleInterest = (principal_amount*rate*time)/100;
document.write(simpleInterest);