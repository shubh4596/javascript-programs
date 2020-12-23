let m1 = Number(prompt("Enter student marks in 1st subject out of 100"));
let m2 = Number(prompt("Enter student marks in 2nd subject out of 100"));
let m3 = Number(prompt("Enter student marks in 3rd subject out of 100"));
let m4 = Number(prompt("Enter student marks in 4th subject out of 100"));

if(m1 < 35 || m2 < 35 || m3 < 35 || m4 < 35){
    document.write("student failed");
}
else{
    let perc = (m1+m2+m3+m4)/4;
    if(perc > 80)
    {
        document.write("distinction");
    }
    else if(perc > 60)
    {
        document.write("first class");
    }
    else if(perc > 50)
    {
        document.write("second class");
    }
    else{
        document.write("fail"); 
    }
}