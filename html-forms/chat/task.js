"use strict"

const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');

chat.addEventListener('click', function() {
    chat.classList.add('chat-widget_active');
});

chat.addEventListener('keydown', function(event) {
   
    if (event.key === 'Enter' && input.checkValidity()) {
        messages.innerHTML += `<div class="message message_client">
        <div class="message__time">${HH}:${MM}</div>
        <div class="message__text">${input.value.trim()}</div>
    </div>`
    input.value = '';
    answerFromBot();
    } 
});

const HH = new Date().getHours();
const MM = new Date().getMinutes();

const answerFromBot = function() {

    let random = Math.floor(Math.random() * phrases.length);
    messages.innerHTML += `<div class="message">
    <div class="message__time">${HH}:${MM}</div>
    <div class="message__text">${phrases[random]}</div>
    </div>`
}

const phrases = [
    'Добрый день!',
    'Вы уволены',
    'Ча-ча-ча',
    'Ты кто такой?',
    'Всего вам хорошего',
];