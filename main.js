//Just learning JS
const pi = 3.15;
let number = 20;
let surname = 'Aprelikov';
const carBrands = ['Audi', 'Porsche', 'McLaren'];
const person = {
    name: 'Artemy',
    age: 19,
    height: 191,
    weight: 92
}
console.log(pi + ' and ' + number + ' and ' + carBrands);
console.log(person);
for (i = 0; i < carBrands.length; i++) {
    console.log(carBrands[i])
}
function sayHi() {
    console.log('Hi, ' + surname);
}
function printCarBrands() {
    for (i = 0; i < carBrands.length; i++) {
        console.log(carBrands[i])
    }
}
pi < number ? sayHi() : printCarBrands();
number < pi ? sayHi() : printCarBrands();
(function (){
    console.log('Hi, bro')
})();
const sayHi2 = (name) => console.log(`Hi, ${name}! How are you?`);
sayHi2('Aprel');
person.profession = 'JS Developer';
carBrands.push('Mitsubishi');
carBrands.splice(2, 1);
console.log(carBrands);
console.log(person);
for (let key in person) {
    console.log(key, ":" + person[key]);
};
class AnimeCharacter {
    constructor (name, rating, village) {
        this.name = name;
        this.rating = rating;
        this.village = village;
    }
    sayBye(){
        console.log("bye");
    }
}
const naruto = new AnimeCharacter("Naruto", 10, "leaf");
console.log(naruto);
naruto.sayBye();
const Hinata = new AnimeCharacter("Hinata", 10, "leaf");
console.log(Hinata);