function evenOrOdd(n){
    if(n%2==0)
    {
        document.write("even");
    }
    else{
        document.write("odd");
    }
}

let num = Number(prompt("Enter a number"));
evenOrOdd(num);