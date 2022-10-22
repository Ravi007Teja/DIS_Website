let slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let k;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";
  }
  for (k = 0; k < dots3.length; k++) {
    dots3[k].className = dots3[k].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}