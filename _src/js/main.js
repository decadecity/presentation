
// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: false,
  progress: true,
  history: true,
  center: true,

  keyboard: {
    79: Reveal.toggleOverview
  },

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

  // Optional libraries used to extend on reveal.js
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector('[data-markdown]'); } },
    { src: 'js/highlight-reveal.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'js/plugin/dc-notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
    //{ src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]

});

Reveal.addEventListener('fragmentshown', function(event) {
  if(event.fragment.dataset.dcRemove && event.fragment.dataset.dcRemove === "true") {
    event.fragment.classList.toggle('remove');
  }
});
Reveal.addEventListener('fragmenthidden', function(event) {
  if(event.fragment.dataset.dcRemove && event.fragment.dataset.dcRemove === "true") {
    event.fragment.classList.toggle('remove');
  }
});

Reveal.addEventListener('slidechanged', function(event) {
  setStrap(event.currentSlide);
});
Reveal.addEventListener('ready', function(event) {
  setStrap(event.currentSlide);
});

function setStrap(element) {
  var strap = document.querySelector('#strap');
  if (strap) {
    if (element.dataset.dcStrap === "false") {
      strap.classList.add('remove');
    } else {
      strap.classList.remove('remove');
    }
  }
}

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
