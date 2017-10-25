var $testDiv;
$(document).ready(function () {
    $testDiv = $(".test-div");
    // События в jQuery: click, mouseenter, mouseleave, resize etc.
    // Методы для перемещения по DOM, цепочки вызовов: .children(), .find(), .eq()
    // Методы для работы с анимациями в jQuery: animate, fadeIn, fadeOut etc.
    var toggle = false;
    $testDiv.children()
        .on("click", function (e) {
            // $(this).fadeOut(1000).fadeIn(100);
            // Или
            if (toggle) {
                $(this).stop(true, false).animate({
                    opacity: 1,
                }, 500, function () {
                    console.log("Animation is over!");
                });
            } else {
                $(this).stop(true, false).animate({
                    opacity: 0,
                }, 500, function () {
                    console.log("Animation is over!");
                });
            }
            toggle = !toggle;
        });

    // Методы для работы с генерируемым контентом в jQuery: .html(), .append(), .prepend(), .text(), .after(), .before()

    $testDiv.eq(0).after("<img src='http://murkote.com/wp-content/uploads/2015/06/european-shorthair-cat-4.jpg.pagespeed.ce.TVNug3Lg3z.jpg' />");
    var text = $testDiv.eq(0).text("New text");
    console.log(text);
    $testDiv.addClass("new-class")
        .removeClass("new-class")
        .hasClass("");
    $testDiv.attr("value");
    // Работа с классами: .addClass, .removeClass, .hasClass, .toggleClass
    // Работа со скроллом: .scrollTop, .scroll()
    // Работа с методами width() и height()
});