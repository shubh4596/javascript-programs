class Square{

    constructor(side){
        this.side = side;
    }
    area(){
         return (this.side*this.side);
     }
}

let ar = new Square(3.5);

document.write(ar.area());