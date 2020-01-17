"use strict";

//consts
const nameInputValue = document.querySelector("#name-input");
const phoneInputValue = document.querySelector("#phone-input");
const actionInputValue = document.querySelector("#action-input");
const surnameInputValue = document.querySelector("#surname-input");

const mainInputValue = document.querySelector(".main-input");
const newElemList = document.querySelector(".main-grid");
const enterForm = document.querySelector(".enter-form");
const errorMess = document.querySelector('.submit-error');

//handler
enterForm.addEventListener("submit", onAddFormSubmit); //обработчик отправки формы

function onAddFormSubmit(event) {
    event.preventDefault();
    submitForm();
}

//f - формирование данных инпута, сброс формы
function submitForm() {
    const name = { title: nameInputValue.value };
    const surname = { title: surnameInputValue.value };
    const phone = { title: phoneInputValue.value };
    const action = { title: actionInputValue.value };
 let req = onChangeInput();
if (req == true) {  
    addNewStr(name, surname, phone, action);
    resetForm();
    }
}

//f - проверка валидации инпутов
function onChangeInput() {
    if (mainInputValue.value === "") {
        errorMess.classList.add("d-flex");
        enterForm.classList.add("border-red");
        return false;
    }else {
        errorMess.classList.remove("d-flex");
        enterForm.classList.remove("border-red");
        return true;
        }
}
//f - создание элемента - строки таблицы
function addNewStr(name, surname, phone, action) {
    newElemList.innerHTML += `<li>1.<p>${name.title}</p></li><li>2.${
    surname.title}</li><li>3.${phone.title}</li><li>4.${action.title}</li>`;
}

//f - сброс данных из инпутов формы
function resetForm() {
    enterForm.reset();
}
