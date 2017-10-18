var animation = 'test';


// VanillaJS
function pushRight(element, distance, duration){
    // Инициализация перед анимацией
    var duration = duration || 500;
    var oneStep = 10;
    var stepSize = distance / (duration / oneStep);
    element.style.position = 'relative';
    element.style.left = (element.style.left) ? element.style.left : '0px';
    var initialLeft = element.style.left;
        var animation = setInterval(function(){
            if(parseInt(element.style.left) >= parseInt(distance) + parseInt(initialLeft)){
                clearInterval(animation);
                return;
            }
            element.style.left = (parseInt(element.style.left) + stepSize) + 'px';
        }, oneStep);
    // Некое условие при котором выполняется анимация
    // Смещением css свйоства нашего объекта
}