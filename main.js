var greetings = "hello to world!";
console.log("Hey, bro! Say " + greetings + "!!");
let num_1 = 5;
var num_2 = 2;
var num_3 = 55;
var res = num_2 + num_3;
console.log("вычитание: " + (num_1 - num_2) + " - " + res + " = -54");
console.log(Math.PI + ": Число ПИ");
console.log(Math.min(4,1,2,22,5,61,77,0) + ": Минимальное число");
if(5 === 5) {
    console.log("NEGRI PIPISKI");
}
if(num_3 < 4) {
    console.log("Фрол Легенда");
} else if(num_2 === 3 || num_2 === 2)
{
    console.log("Фрол всё равно легенда");
} else {
    console.log("Виолетта Котик");
}

let kakish = "govno";
switch(kakish) {
    case "kakish": 
        console.log("ФЕКАЛИИ");
        break;
    case "govno": 
        num_1 = 188;
        break;
    default:
        console.log("def");
}

console.log("переменная нам 1 равна " + num_1);
