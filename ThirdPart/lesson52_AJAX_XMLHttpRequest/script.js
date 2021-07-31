"use strict";

const rubInput = document.querySelector(".rub__input"),
  eurInput = document.querySelector(".euro__input");

rubInput.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  //        request.open(method, url, async,login ,pass );collect configuration for future request
  request.open("GET", "current1.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  //check request status at the right moment
  // request.addEventListener("readystatechange", () => {
  //   if (request.readyState === 4 && request.status === 200) {
  //     const data = JSON.parse(request.response);
  //     eurInput.value = (+rubInput.value / data.current.usd).toFixed(2);
  //   } else {
  //      eurInput.value = 'Всё говно, переделывай';
  //   }

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      eurInput.value = (+rubInput.value / data.current.usd).toFixed(2);
    } else {
      eurInput.value = "Всё говно, переделывай";
    }
  });

  //свойства
  //status - 201,404, ...
  //statusText - OK, NOT FOUND
  //response - здесь лежит ответ который нам задал бэкенд разработчик
  //readyState - содержит текущее состояние запроса
});
console.log(rubInput, eurInput);
