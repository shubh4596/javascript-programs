let year = Number(prompt("Enter a year"));

if(year>0){
    if(year%4 == 0){
        if(year%100==0){
            if(year%400 == 0)
             document.write(`${year} is a leap year`);
            else
             document.write(`${year} is not a leap year`);
        }
        document.write(`${year} is a leap year`);
    }
    else{
        document.write(`${year} is not a leap year`);
    }

}
else{
    document.write(`${year} is not counted as starting of year`);
}
