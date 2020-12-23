let m1 , m2 , m3 , m4;
class Exam{
    constructor(marks1 , marks2 , marks3 , marks4)
    {
        m1 = marks1;
        m2 = marks2;
        m3 = marks3;
        m4 = marks4;
    }
    marks(){
        if(m1 < 35 || m2 < 35 || m3 < 35 || m4 < 35)
        {
            document.write("Student failed");
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
    }

}


let exam1 = new Exam(21 , 82 , 73 , 94);
exam1.marks();

let exam2 = new Exam(96 , 85 , 78 , 84);
exam2.marks();
