

import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";
update();

form.addEventListener('input', onInput);
form.addEventListener("submit", throttle(onSubmit, 500));

function onInput(event) {
    let locStorage = {
        message: event.currentTarget.elements.message.value,
        email: event.currentTarget.elements.email.value
    };
    let stringifyLocal = JSON.stringify(locStorage);
    localStorage.setItem(LOCALSTORAGE_KEY, stringifyLocal);
}

function onSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

   localStorage.removeItem(LOCALSTORAGE_KEY);
   form.reset();
};
   

function update() {
    let messageParse = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    let messageCuurent = messageParse ? messageParse.message : "";
    let emailCurrent = messageParse ? messageParse.email : "";
    form.message.value = messageCuurent;
    form.email.value = emailCurrent; 
}
