var button = document.querySelector(".save-btn");
var form = document.querySelector("#settings-form");
var name = document.querySelector("input.name");
var theme = document.querySelector("select.theme");
var pushes = document.querySelector("input.pushes");
var SETTINGS = "settings";

try{ // если код можно выполнить без ошибок

    getSettings();
} catch(e){ // Если возникла ошибка
    if(e.name == 'SyntaxError'){

    } else {
        throw e;
    }
    // AJAX запрос, получить данные с сервера
} finally {
    alert("Код выполнится всегда!");
}

function changeTheme(){
    if(theme.value === 'dark'){
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
};

function getSettings(){
    var settings = JSON.parse(localStorage.getItem(SETTINGS));
    if(typeof settings.name === 'undefined' ||
    typeof settings.theme === 'undefined' ||
    typeof settings.pushes === 'undefined'){
        throw new Error("DataError");
    }
    if(settings.name && settings.name !== ''){
        document.querySelector("input.name").value = settings.name;
        debugger;
    }
    if(settings.theme){
        theme.value = settings.theme;
        changeTheme();
    }
    if(settings.pushes){
        pushes.checked = settings.pushes;
    }
};

form.addEventListener("submit", function(e){
    var settings = {
        name: undefined,
        theme: theme.value,
        pushes: pushes.checked
    };

    localStorage.setItem(SETTINGS, JSON.stringify(settings));
    // Отправим данные на сервер.
    alert("Подтверждаю!");
    e.preventDefault();
})
document.querySelector(".clear-btn").addEventListener("click", function(){
    localStorage.removeItem(SETTINGS);
})
theme.addEventListener("change", changeTheme)