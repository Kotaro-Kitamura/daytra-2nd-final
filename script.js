// swiper 

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: .9,
  spaceBetween: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});

// グローバルメニューの下線

jQuery('.header ul li a').click(function (e) {
  e.preventDefault();

  jQuery('.header ul li a').removeClass('is-active');
  jQuery(this).addClass('is-active');

  return false;
});

// smooth scroll

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate({
      scrollTop: position
    },
    speed
  );
  return false;
});

// accordion

jQuery('.question').click(function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.question_icon').toggleClass('is-open');
});

// to-top

jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.to_top').addClass('is-show');
  } else {
    jQuery('.to_top').removeClass('is-show');
  }
});

jQuery('.to_top').click(function () {
  jQuery('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
});


// google forms
let $form = $('#js-form')
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    // crossDomain: true,
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        //送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
});


// formの入力確認
let $submit = $('#js-submit')
$('#js-form input, #js-form select, #js-form textarea').on('change', function () {
if (
  // ↓inputの中のvalueが空（""）でない時に、という意味
  $('.input_name').val() !== "" &&
  $('.input_kana').val() !== "" &&
  $('.form_checkbox').prop('checked') === true
) {
  // 全て入力された時
  $submit.prop('disabled', false)
  $submit.addClass('-active')
} else {
  // 入力されていない時
  $submit.prop('disabled', true)
  $submit.removeClass('-active')
}
});

//drawer

jQuery(function () {

  jQuery('.drawer_icon').on('click', function (e) {
    // aタグを押した時のページ遷移など、デフォルトの動きを制御する↓. クリックイベントの時は付けたほうが良い
    e.preventDefault();

    jQuery('.drawer_icon').toggleClass('is-active');
    jQuery('.drawer_content').toggleClass('is-active');
    jQuery('.drawer_background').toggleClass('is-active');

    // クリックイベントの親要素への伝播を防ぐ。古いブラウザ用。あってもなくても良いが慣例として付けておく↓
    return false;
  });
});



