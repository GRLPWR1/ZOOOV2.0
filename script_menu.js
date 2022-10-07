const iconMenu = document.querySelector('.hamburger-menu');
const menuBody = document.querySelector('.menu__box');

function menuToggle() {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    if (menuBody.classList.contains('_active')) {
      menuBody.addEventListener ('click', function menuClose(e) {
      if (e.target.tagName == 'A') {
        menuToggle()
        menuBody.removeEventListener ('click', menuClose)
      }
    })
    }
  }

iconMenu.addEventListener('click', menuToggle)

//https://ru.stackoverflow.com/questions/1061469/Как-закрыть-меню-при-клике-на-ссылку
//https://qna.habr.com/q/1138092
//https://stackoverflow.com/questions/15692291/how-do-i-removeclassactive-for-just-one-of-my-li-elements-with-jquery