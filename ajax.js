function addNewPeople(people) {
    // Создадим h4
    var name = document.createElement("h4");
    name.classList.add("people__name");
    name.innerHTML = people.name;

    // Создадим div.age
    var age = document.createElement("div");
    age.classList.add("people__age");
    age.innerHTML = people.age;

    // Создадим img
    var img = document.createElement("img");
    img.classList.add("people__image");
    img.src = people.photo;
    img.width = '200';

    document.querySelector(".content").appendChild(name);
    document.querySelector(".content").appendChild(age);
    document.querySelector(".content").appendChild(img);
}

function request(method, url, body, callback) {
    // 1. Создали объект
    var xhr = new XMLHttpRequest();

    // 2. Метод .open() настривает AJAX-запрос
    // xhr.open('json/data.json?q=запрос', "POST");
    xhr.open(method.toUpperCase(), url.toLowerCase(), true);

    // 3. Отправляем запрос
    xhr.send((typeof body === 'object' && body !== null) ? body : '');

    // 4. Отслеживаем изменения статуса нашего запроса
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) {
            console.log("Запрос в обработке... статус(" + this.readyState + ")");
            return;
        }
        if (this.readyState == 3) {
            // Показывать прелоадер
        }
        callback(this.responseText);
    };
}

// request – асинхронная функция.
// Вынести её в обработчик события click;

var button = document.querySelector(".button");
button.addEventListener("click", function(){
    request("get", 'json/data.json', null, function(data){
        try{
            var people = JSON.parse(data);
            people.map(addNewPeople);
            console.log(data);
        } catch (e) {
            console.log(e);
        }
    });
})

console.log("Запрос еще не обработан");

// jQuery реализация

//Fetch API – работает на Promises.
// fetch('http://localhost:63342/goit-11-module-4/json/data.json?_ijt=n5227rt530605lh7m9nrpg3mev')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         // Мы снова получили JS объекты
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.error("Ошибка!");
//     })


