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

let arr = [12, 4, 15, 5.4, "negroid", false];
console.log(arr[0]);
console.log(arr.length)

let nosferatu = [[5.7,"jojo"],[true,false],[3,4]];
console.log(nosferatu[1][1]);

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let j = 0;
while(j < 7){
    j++;
    console.log(j);
}

let iks = 1090;

do {
    iks-=200;
    console.log(iks);
} while(iks >= 20);


for (let b = 0; b <= 200; b++) {
    if(b % 2 == 0)
        continue;
    if(b > 20)
    break;
    console.log(b);
}

let arrarat = [1,3,21,2.1];

for(let ix = 0; ix < arrarat.length; ix++){
    console.log("Элемент массива " + (ix+1) + " --> " + arrarat[ix]);
}

for(let ipx = 0; ipx < nosferatu.length; ipx++){
    let c = nosferatu[ipx];
    for(lol = 0; lol < c.length; lol++){
        console.log(c[lol]);
    }
}

let m;
if(confirm("Желаешь пройти тест?")){
    m = prompt("Введи своё имя для теста:");
    let jol = confirm("Виолетта Грубор самая лучшая во всём?");
    if(jol){
        alert(m + ", Вы абсолютно правы!");
    }   else {
        alert("Да пошёл ты...");
    }
}   else{
    alert("не очень и хотелось, козёл");
}

console.log("ghghashghasgklhalsgaskj");

function info (name) {
    console.log("Привет " + name);
    console.log("!");
}


function calculator (a,b) {
    let resultat = a + b;
    info(resultat);
}

calculator(6,8);

function masslator (massiv) {
    let bitch = 0;
    for(i=0;i<massiv.length;i++){
        bitch+= massiv[i];
    }
    console.log(bitch);
}

let massivishe =[142,123123,521];

masslator(massivishe);

