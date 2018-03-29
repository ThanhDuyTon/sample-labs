setTimeout(function () {
  var platform = window.navigator.platform;

  // Native JS
  document.querySelector("#sample-2").innerHTML = platform;

  // jQuery
  $('#sample-3').text(platform);
}, 5000);
