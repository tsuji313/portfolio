'use strict';
{
  /*================================================*/
  /*ハンバーガーメニュー*/
  /*================================================*/
  const hamburger = document.querySelector('.hamburger');
  const headerNav = document.querySelector('.header-nav');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    headerNav.classList.toggle('open');
  });

  // メニューリストをクリックしたらサイドメニューを消す
  const navItem = document.querySelectorAll('.nav-item');

  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener(
      'click',
      function () {
        hamburger.classList.toggle('open');
        headerNav.classList.toggle('open');
      },
      false
    );
  }
  /*================================================*/
  /*Topへ戻るボタン*/
  /*================================================*/

  // ボタンをクリックしたらTopへ移動
  const topBtn = document.querySelector('#top-btn');
  topBtn.addEventListener('click', scrollTop);

  function scrollTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  // スクロールされたら表示される
  window.addEventListener('scroll', scrollEvent);

  function scrollEvent() {
    if (window.scrollY > 100) {
      topBtn.style.opacity = 1;
      topBtn.style.visibility = 'visible';
    } else if (window.scrollY < 200) {
      topBtn.style.opacity = 0;
      topBtn.style.visibility = 'hidden';
    }
  }
}
