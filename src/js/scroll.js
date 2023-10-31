// import smoothscroll from "smoothscroll-polyfill";

// // kick off the polyfill!
// smoothscroll.polyfill();
// if no Webkit browser
(function(){
  let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
  let scrollbarDiv = document.querySelector('.body');
    if (!isChrome && !isSafari) {
      scrollbarDiv.innerHTML = 'You need Webkit browser to run this code';
    }
})();