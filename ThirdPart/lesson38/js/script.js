window.addEventListener('DOMContentLoaded',()=>{
    //tabs
    const tabsContent = document.querySelectorAll('.tabcontent'),
            tabs = document.querySelectorAll('.tabheader__item'),
            tabParent = document.querySelector('.tabheader__items');

    const hideTabContent = () => {
        tabsContent.forEach(element => {
            element.classList.add('hide');
            element.classList.remove('show','fade');
        });

        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click',(event)=>{
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((tab, i) => {
                if(tab == target){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    //Timer

    const deadline = '2021-07-15';
    
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (3600 * 1000 * 24)),
                hours = Math.floor(((t / (1000 * 60 * 60))) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                 seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t ,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(selector, endtime) {
        co

    }
});