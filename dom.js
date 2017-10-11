var arrayOfElements = document.getElementsByClassName("test-div");
var variable = "Любой динамический контент";
var html = '<div class="class-name">' + variable + "</div>";
// for(var i = 0; i < arrayOfElements.length; i++){
//     arrayOfElements[i].style.backgroundColor = "#ff000" + i;
// }

var element = document.getElementsByClassName("test-div")[0];
// element.className += " yellow";
// element.className = element.className + "yellow";

// element.className = element.className.replace("yellow", "");

element.classList.add("yellow");
element.classList.remove("yellow");

var markupWithText = element.innerHTML;
document.getElementsByClassName("test-div")[1].innerHTML = markupWithText;

// Создание элементов в DOM

// Создали div
var div = document.createElement("div");
// Изменяем наш div, добавили класс, вставили контент
div.className = "test-name";
div.innerHTML = "<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid architecto cum deserunt dignissimos ducimus ea eaque eius excepturi facere facilis fugit nam, natus, nesciunt nobis ullam voluptatem voluptatibus?</b>"

// Добавляем элемент в наш body
document.body.appendChild(div);

var tester = {
    test: 1,
    setTest: function(value){
        this.test = value;
    },
    main: this,
    getTest: function(){
        return this.test;
    }
}
