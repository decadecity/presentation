function setStrap(slide) {
  var strap = $('#strap');
  if (slide.data('dc-strap') === false) {
    strap.addClass('remove');
  } else {
    strap.removeClass('remove');
  }
}

function setBackground(slide) {
  var html = $('html');
  if (slide.length && slide.hasClass('invert')) {
    html.addClass('invert');
  } else {
    html.removeClass('invert');
  }
}

document.addEventListener('SLIDE_CHANGE', function(e) {
  setStrap(Dz.getCurrentSlide());
  setBackground(Dz.getCurrentSlide());
});


function resize () {
  var font_size = 1.25;
  var window_size = Math.min(window.innerWidth, window.innerHeight);
  font_size = font_size * window_size / 640;
  var strap = document.querySelector('#strap');
  if (strap) {
    strap.style.fontSize = font_size + 'em';
  }
}
resize();
window.addEventListener('resize', resize);
