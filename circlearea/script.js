let r1 = Number(prompt("Enter the Radius"));
area(r1);

function area(r){
    area = 3.14*r*r;
    document.write(`Area is ${area}`);
}