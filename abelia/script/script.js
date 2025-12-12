'use strict';
{
  // --------------- サイドメニュー ----------------
  const btn = document.querySelector('.nav-btn');
  const menu = document.querySelector('.nav-list');
  const menuList = document.querySelectorAll('.nav-list li');
  const overlay = document.querySelector('.overlay');

  // メニューを閉じる関数
  function closeMenu() {
    menu.classList.remove('active');
    btn.classList.remove('active');
    overlay.classList.remove('active');

    btn.textContent = 'Menu';
    // アクセシビリティ対応
    btn.setAttribute('aria-expanded', 'false');
  }

  // ボタンを押したとき
  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');

    // if (isOpen) {
    //   btn.textContent = 'Close';
    // } else {
    //   btn.textContent = 'Menu';
    // }
    // 三項演算子
    btn.textContent = isOpen ? 'Close' : 'Menu';
    // アクセシビリティ対応
    btn.setAttribute('aria-expanded', isOpen);
  });

  // メニューのリストをクリックしたとき
  menuList.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });

  // 背景をクリックしたときも閉じる
  overlay.addEventListener('click', closeMenu);

  // escキーを押したときも閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}
{
  // TOPへ戻るボタン
  const topTo = document.querySelector('.topTo');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topTo.classList.add('show');
    } else {
      topTo.classList.remove('show');
    }
  });
}
