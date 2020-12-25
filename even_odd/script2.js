function isEven(x){
    if(x%2 == 0)
    {
        return true;
    }
    else{
        return false;
    }

}

let x = Number(prompt("Enter a number"));
let rs = isEven(x);
document.write(typeof(rs));
document.write("<br>");
document.write(rs);