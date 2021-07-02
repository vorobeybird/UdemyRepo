window.addEventListener('DOMContentLoaded',()=>{

    const tabsContent = document.querySelectorAll('.tabcontent'),
            tabs = document.querySelectorAll('.tabheader__item'),
            tabParent = document.querySelector('.tabheader__items');

    const hideTabContent = () => {
        tabsContent.forEach(element => {
            element.style.display = 'none';
        });

        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'block';
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


});