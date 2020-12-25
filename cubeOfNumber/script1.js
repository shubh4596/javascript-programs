class cube{
    constructor(n)
    {
        this.num = n;
    }

    cubing(){
        return this.num*this.num*this.num;
    }
}

// let n = Number(prompt("Enter a number"));

let cube1 = new cube(2);
document.write(cube1.cubing());
document.write("<br>");
let cube2 = new cube(3);
document.write(cube2.cubing());
