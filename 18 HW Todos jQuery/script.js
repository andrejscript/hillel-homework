"use strict";

$(function () { 
    function SaveItem() {
        let text = $("#text").val(); // геттер из инпута
        if (text != "") // проверка заполнения инпута
        {
            let item = $("<li></li>").html(text); // создание нового пункта списка
            item.append("<input class='del' type='button' value='X'></input>"); // создание кнопки удаления пунтка
            $("ol").append(item); // добавление новоно пунтка
            $("#text").val(""); // очистка поля ввода
            localStorage.setItem('ol', JSON.stringify(item));
            // handler для удаления
            $(".del").on("click", function () { 
                $(this).parent().remove(); // поиск и удаления родителя конкретной кнопки del при клике
            });

            $(item).click(function () { // переключение тумблера-состояния задачи (цвет пункта)
                $(this).toggleClass('done');
                // localStorage.setItem('background', '#91e891');
            });
        
        }else{
            $(".submit-error").css("display", "flex"); //вызов блока ошибки при незаполненном поле
            $(".submit-error").fadeOut(4000, function (){ $(this).remove();}); //плавное удаление окна ошибки
        }
    };

    $("#button").click(function () { // создание нового пункта по клику на кнопку (мышь)
        SaveItem();
    });

    $("#text").keydown(function (event) { //создание нового пункта по клику на кнопку ('Enter')
        if (event.which == "13")
        {
            SaveItem();
        }
    });

});