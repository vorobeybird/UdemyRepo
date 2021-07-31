'use strict';

class Rectangle {
    constructor(heigh,width){
        this.heigh = heigh;
        this.width = width;
    }

    calcArea(){
        return this.heigh * this.width;
    }
}

// const square = new Rectangle(10,10);

// const long = new Rectangle(20, 100);

// console.log(square.calcArea());

// console.log(long.calcArea());


class ColoredRectangleWithText extends Rectangle {
    constructor (heigh, width, text, bgColor) {
        super(heigh,width); //Вызывает суперконструктор у родителя, чтобы наследовать свойства родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text:${this.text}, color ${this.bgColor}`);
    }
}

const checkRectangle = new ColoredRectangleWithText(10,10,'Hello', "Black");

// checkRectangle.showMyProps();
console.log(checkRectangle.calcArea());