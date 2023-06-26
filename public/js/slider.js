var sliderIndex = 1;
showSlider(sliderIndex);

function moveSlider(n) {
  showSlider(sliderIndex += n);
}

function currentSlider(n) {
  showSlider(sliderIndex = n);
}

function showSlider(n) {
  var i;
  var slider = $('.slidercontent')
  var dots = $('.dot')
  if (n > slider.length) {sliderIndex = 1}

  if (n < 1) {sliderIndex = slider.length}
  for (i = 0; i < slider.length; i++) {
      slider[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slider[sliderIndex-1].style.display = "block";
  dots[sliderIndex-1].className += " active";
}