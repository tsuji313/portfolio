
/* ======================================= */
/* chart */
/* ======================================= */
var barData = {
  labels: ['2017年3月期', '2018年3月期', '2019年3月期', '2020年3月期', '2021年3月期',],
  series: [[7000, 9000, 12000, 11500, 14000]]
};

var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace:30,
    labelInterpolationFnc: function (value) {
      return value + '億'
    }
  },
  width: '100%',
  height: '38vh'
};

new Chartist.Bar('.bar-chart', barData, barOptions);

/* ======================================= */

jQuery(function () {

  /* ======================================= */
  /* ヘッダーナビゲーション */
  /* ======================================= */
  $(".header-navBtn").click(function () {
    $(this).toggleClass('active');
    $(".header-navList, .header-navList-bg").toggleClass('active');
  });

  $(".header-navList a").click(function () {
    $(".header-navBtn, .header-navList, .header-navList-bg").removeClass('active');
  });

  /* ======================================= */
  /* フッターナビゲーション */
  /* ======================================= */
  $('.footer-navTtl').on('click', function () {
    $('.footer-navBox').slideUp(400);
    var findElm = $(this).next(".footer-navBox");
    if ($(this).hasClass('close')) {
      $(this).removeClass('close');
    } else {
      $('.close').removeClass('close');
      $(this).addClass('close');
      $(findElm).slideDown(400);
    }
  });


});
