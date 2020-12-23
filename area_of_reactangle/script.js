function areaOfRectangle(length , width){
    return length*width;
}

let l = prompt("Enter the length");
let w = prompt("Enter the width");


 let area = areaOfRectangle(l , w);
 document.write(`area is ${area}`);