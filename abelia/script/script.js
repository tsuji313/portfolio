'use strict'
// サイドメニュー
const btn = document.querySelector('.nav_btn');
const menu = document.querySelector('.sideMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('open-menu');
  btn.classList.toggle('open-menu');

  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'Close';
  } else {
    btn.innerHTML = 'Menu';
  }
});

// メニューリストをクリックしたらサイドメニューを消す
const menuList = document.querySelectorAll('.js_menuList')

for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener('click', function () {
    menu.classList.toggle('open-menu');
    btn.classList.toggle('open-menu');

    if (btn.innerHTML === 'Menu') {
      btn.innerHTML = 'Close';
    } else {
      btn.innerHTML = 'Menu';
    }
  }, false);
}


// ボタンの表示
// window.addEventListener("scroll", () => {
//   const currentY = window.pageYOffset;
//   if (currentY > 436) {
//     setTimeout(function () {
//       btn.style.opacity = 1;
//     }, 1);
//   } else {
//     setTimeout(function () {
//       btn.style.opacity = 0;
//     }, 1);
//   }
// });
