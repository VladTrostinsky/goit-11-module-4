var unit = {
    health: 100,
    damage: 1,
    position: {
        x: 0,
        y: 0,
        z: 0
    },
    setPosition: function(position){
        // ...
        return true;
    },
    getPosition: function(){
        // ... ;
        return this.position;
    },
    getHealth: function(){
        // ...
        return this.health;
    },
    setHealth: function(damage){
        // ...
        return Math.random();
    }
};

function Tank(health){
    var tank = {
        health: health
    };
    return Object.setPrototypeOf(tank, unit);
}
var tank = new Tank(1000); // Или Object.setPrototypeOf
var solider = Object.create(unit);

tank.damage = 125;
tank.health = 1000;
solider.damage = 25;

for(var prop in tank){
    console.log("TANK: " + prop + " = " + tank[prop]);
}
for(var prop in solider){
    console.log("SOLIDER: " + prop + " = " + solider[prop]);
}

// Создать объект стороны
// Отсеять значения не относящиеся к прототипу
// Дескрипторы

Object.defineProperty(unit, "defence", {
    value: "0",
    writable: false
});







// var obj = {};
//
//
// var example = {
//     onclick: function(){}
// }
//
// function Button(){
//     // Сделаем возвращаемый объект со ссылкой на example
//     return {
//         onclick: onclick
//         // ...
//     }
// }
// function Link(){
//     return {
//         // ...
//     }
// }
// var button1 = new Button;
// var button2 = new Button;

var products = [];
var allProducts = {
    price: 0,
    addToCart: function(){
        // ...
    },
    getDescription: function(){

    }
}
function Product(price, category) {
    return Object.setPrototypeOf({
        price: price
        // ...
    }, allProducts);
};
function AdditionalProduct(product){
    return Object.setPrototypeOf({
        product: product,
        price: 100
    }, allProducts);
};

function create(prototype){
    return Object.setPrototypeOf({}, prototype);
}
