window.addEventListener("DOMContentLoaded", () => {
  const tabsContent = document.querySelectorAll(".tabcontent"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabParent = document.querySelector(".tabheader__items");

  const hideTabContent = () => {
    tabsContent.forEach((element) => {
      element.classList.add("hide");
      element.classList.remove("show", "fade");
    });

    tabs.forEach((element) => {
      element.classList.remove("tabheader__item_active");
    });
  };

  const showTabContent = (i = 0) => {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  };

  hideTabContent();
  showTabContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((tab, i) => {
        if (tab == target) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  let deadline = "2021-07-10";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.now(),
      days = Math.floor(t / (3600 * 1000 * 24)),
      hours = Math.floor((t / (3600 * 1000)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      "total;": t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, "1000"); /*Создаём переменную потому что нам 
      нужно будет отменить интервал после*/
    console.log(timer);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
  // Modal vindow activation
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    closeButton = document.querySelector("[data-close]");

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    // modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    // modal.classList.toggle("show");
  }

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 13000); //запускаем открытие модального окна через 13 секунд

  function showModalByScroll(){

        /*тут мы сравниваем складывая pageYOffset (расстояние скролла) плюс размер элемента в окне
      с полным размером скролла документа, если они совпадают - вызываем модальное окно */

    if (window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener("scroll", showModalByScroll); /*при вызове Remove мы должны четко указывать
         какое событие и какую функцию удалить*/
      }
  }

  window.addEventListener("scroll", showModalByScroll);


});
