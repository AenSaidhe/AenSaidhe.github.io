// 
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn-active');
  $('.module-menu').toggleClass('module-menu-active');
});
// 
