// 1. Новые варианты объявления переменных

// ES5
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// В конце цикла i == 10;

// ES6
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// Получим error, потому-что let объявлена внутри блока for;

const E = 2.718281828;
// ...
E = 0; // Error! Попытка изменить константу

let test = "test";
// ...
let test = "what?"; // Error! Попытка дважды объявить переменную

// 2. Шаблонные строки.
let name = "Vlad";
console.log("My name is: " + name); // ES5
console.log(`My name is: ${name}`); // ES6
function getName(name) {
    return typeof name === 'string' ? name.toUpperCase() : false;
};
console.log(`My name is: ${getName(name)}`);
// Можно использовать выражения, вызов функций и т/д

// ES5
let galleryES5 = '<div class="gallery">' +
    '<div class="gallery__item">' +
    '<img src="" alt="" class="gallery__image">' +
    '</div>' +
    '<!-- ... etc. -->' +
    '</div>';

// ES6
let test = "test";
let src = "test";
let gallery = `
    <div class="gallery">
        <div class="gallery__item">
            ${test}
            <img src="${src}" alt="" class="gallery__image">
        </div>
        <!-- ... etc. -->
    </div>
`;
// С шаблонными строками – можно использовать многострочный ввод без знака +
document.body.innerHTML = gallery;

// 3. Деструктурирование в ES6

// ES5
var o = {
    a: 1,
    b: 2,
    c: 3
};
var a = o.a, b = o.b, c = o.c;
function test(obj){
    var height = obj.height;
    height = 500;
}
test({
    height: 100,
    width: 100
})

function test(obj){
    let {height, width} = obj;
    console.log(height);
}
test({
    height: 100,
    width: 100
})

// ES6
let {a, b, c} = Object.assign({
    a: 1,
    b: 2,
    c: 3
});

// ES5
function test2(){
    var prop1 = "value1", prop2 = "value2", prop3 = "value3";
    return {
        prop1: prop1,
        prop2: prop2,
        prop3: prop3
    }
}

// ES6
var obj = {
    prop1: prop1,
    prop2: prop2,
    prop3: prop3
};

let prop1 = "value1", prop2 = "value2", prop3 = "value3";
let obj = {
    prop1,
    prop2,
    prop3
};

// 4. Функции в ES6
// 4.1 Синтаксис стрелочных функций

// ES5
function getName(name) {
    return typeof name === 'string' ? name.toUpperCase() : false;
};

// ES6
let replace = (value) => value.replace(/\D/g, "");
let getName = (name) => name.toUpperCase();

// let getName = (name) => typeof name === 'string' ? name.toUpperCase() : false;
// Или если мы хотим более длинную функцию с явным return:
let getLongName = (name) => {
    // ... some actions
    return name.toUpperCase();
}


let getStringArray = (array) => {
    let render = (element) => console.log(`Number 1: ${element}`);
    array.forEach(render);
    return true;
};
// !ВАЖНО! Стрелочные функции берут свой this из ВНЕ!

// 4.2 БОНУС: Каррирование, применение нового синтаксиса
let degree = (a, b) => a ** b;
let expIn = (c) => degree;

// 4.3 Аргументы по умолчанию
let greeting = (word = "Да здравствует ", name = 'Холоп') => {
    return `${word} ${name}!`;
};
greeting(); // Да здравствует Холоп!
greeting("Влад") // Да здравствует Влад!

// 4.4 rest оператор.
let adding = (...args) => {
    let sum = 0;
    args.forEach((elem) => sum += elem);
    return sum;
};

// 4.5 Новый синтаксис методов в ES6

//ES5
var someObj = {
    method: function(arg){
      // ...
    },
};

// ES6
let someObj = {
    method(arg){
        // ...
    }
};

// 5. Классы
class Car{
    constructor(mark){
        this.mark = mark;
    }
    getMark(){
     return this.mark;
    }
}

let bmw = new Car("bwm");

class Traktor extends Car{
    constructor(){
        super("Traktor");
    }
    dugging(){
        console.log("I am DUUUUG!");
    }
}

// 6. Полезно знать
// 6.1 Бинарные и восьмиричные системы исчесления в ES6
let binary = 0b010101;
let oct = 0o713566;
let sxt = 0xfffff;

// 6.2 export, import
// 6.3 Встроенные методы
Object;
Array;
// 6.4 Новые конструкторы Symbol, Map, Set
// 6.5 Proxy, Интернационализация и прочее.
