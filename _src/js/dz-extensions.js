function setStrap(element) {
  var strap = document.querySelector('#strap');
  if (strap && element) {
    if (element.dataset.dcStrap === "false") {
      strap.classList.add('remove');
    } else {
      strap.classList.remove('remove');
    }
  }
}

function setBackground(element) {
  var html = document.querySelector('html');
  if (element && element.classList.contains('invert')) {
    html.classList.add('invert');
  } else {
    html.classList.remove('invert');
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
